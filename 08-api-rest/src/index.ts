import { Elysia } from 'elysia'
import { db } from '../db';
import { usersModule } from './modules/users';




const bootstrap = async() =>{
	await db.connectDB();
	const app = new Elysia()
	.use(usersModule)
	.get('/', () => 'Hello Elysia')
	.listen(8080)

	console.log(`🦊 Elysia is running at on port ${app?.server?.port}...`)
}

bootstrap();