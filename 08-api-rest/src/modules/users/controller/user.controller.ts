// Routes
import Elysia, { Context } from "elysia";
import { getById, getAll, updateRegister, deleteRegister, insertRegister,  } from "../model/user";

export const userController = (app: Elysia) => app
.group('/user' ,app => 
app.onError(({ code, error, set }) => {
    if (code === 'NOT_FOUND') {
        set.status = 404;

        return 'Not Found :(';
    }
})
.get('/', (req) => getAll(req))
.get('/:id', ({ params }) => getById(params.id))
.post('/', insertRegister)
.put('/:id', (req) => updateRegister(req as Context))
.delete('/:id', (req) => deleteRegister(req as Context) )
)

