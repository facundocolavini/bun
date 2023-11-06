// Routes
import Elysia, { Context } from "elysia";
import { getById, getAll, updateRegister, deleteRegister, insertRegister,  } from "../controller/user";
export const userRoute = (app: Elysia) => app

    .onError(({ code, error, set }) => {
        if (code === 'NOT_FOUND') {
            set.status = 404;

            return 'Not Found :(';
        }
    })
    .get('/user', (req) => getAll(req))
    .get('/user/:id', ({ params }) => getById(params.id))
    .post('/user', insertRegister)
    .put('/user/:id', (req) => updateRegister(req as Context))
    .delete('user/:id', (req) => deleteRegister(req as Context) )