import Elysia, { Context } from "elysia";
import UserModel from "./schema";

/** 
 * Lista de usuarios
 * @params req 
 */

// Controllers 
export const getUsers = async (req: Context) => {
    const dbUsers = await UserModel.find({})

    return dbUsers
}

export const registerUser = async (req: Context) => {
    const dbUsers = await UserModel.create({ email: 'facu_colavini@hotmial.com', name: 'Facundo Colavini', createdAt: Date.now() })

    return dbUsers
}

export const usersModule = new Elysia()
    .get('/user', (req) => getUsers(req))
    .get('/user/id', () => 'Usuario')
    .post('/user', (req) => registerUser(req))
    .put('/user', () => 'Usuario Actualizado')