import { Elysia } from 'elysia';
import { db } from './db';
import { userController } from './modules/users/controller/user.controller';


const bootstrap = async () => {
	await db.connectDB();
	const app = new Elysia()
		.state('version', 1)

		.use(userController)
		.get('/', () => 'API Rest')
		.listen(process.env.PORT || 8080)

	console.log(`🦊 Elysia is running at on port ${app?.server?.port}...`)
}

bootstrap();