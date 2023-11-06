import { Elysia } from 'elysia';
import { db } from '../db';
import { userRoute } from './modules/users/routes/user.routes';


const bootstrap = async () => {
	await db.connectDB();
	const app = new Elysia()
		.use(userRoute)
		.get('/', () => 'API Rest')
		.listen(8080)

	console.log(`🦊 Elysia is running at on port ${app?.server?.port}...`)
}

bootstrap();