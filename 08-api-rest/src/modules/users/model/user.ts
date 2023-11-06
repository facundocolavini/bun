import { Context } from "elysia";
import { isValidObjectId } from "mongoose";
import { User } from "../../../interface";
import UserModel from "../schema";

/** 
 * Models para el manejo de los usuarios
 * @params req 
 */


export const getAll = async (req: Context) => {
    const dbUsers = await UserModel.find({}).sort({ createdAt: -1 })

    return dbUsers
}


export const getById = async (id: string) => {
    if (!isValidObjectId(id)) return null;

    console.log(id)
    try {
        const user = await UserModel.findById(id).lean();  // lean() sirve para trabajar con menos informacion
        if (!user) throw Error;
        return JSON.parse(JSON.stringify(user)); // Para serializar el objeto

    } catch (err) {

        return {
            status: 404,
            message: "No se encontro el registro " + id
        }
    }

}

export const insertRegister = async (req: Context) => {
    const { email, name } = req.body as User;
    const newUser = new UserModel({ email, name, createdAt: Date.now() }); // Solo mandamos la descripcion porque el id se genera automaticamente

    try {
        await newUser.save();

        return newUser;
    } catch (err: any) {
        console.log(err)
        return { message: err.errors.status.message };
    }

}

export const updateRegister = async (req: Context) => {
    const { id } = req.params;
    const userToUpdate = await UserModel.findById(id);

    if (!userToUpdate) {
        req.set.status = 404
        return {

            status: req.set.status,
            message: "No se encontro la entrada " + id
        };
    }
    // Si recibimos la descripcion o status en el body, actualizamos la entrada sino utiliza el valor anterior.
    const {
        name = userToUpdate.name,
        email = userToUpdate.email,
    } = req.body as User;
    try {
        await UserModel.findByIdAndUpdate(
            id,
            {
                name,
                email,
            },
            { runValidators: true, new: true }
        ); // Para que corra las validaciones del modelo y nos devuelva el objeto actualizado

        return {
            status: req.set.status,
            message: 'Actualizado con Exito'
        }

    } catch (err: any) {
        console.log(err)
        return {
            status: err.error.status,
            message: err.errors.status.message
        };
    }
};


export const deleteRegister = async (req: Context) => {
    const { id } = req.params;

    const entry = await UserModel.findByIdAndDelete(id);


    if (!entry) {
        req.set.status = 404
        return {
            status: req.set.status,
            message: "No se encontro la entrada " + id
        };

    }

    return {
        status: req.set.status,
        message: 'Registro eliminado con extio!'
    }
};



export const userModel = {
    getAll,
    getById,
    insertRegister,
    updateRegister,
    deleteRegister
}