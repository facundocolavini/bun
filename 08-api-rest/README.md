# 08-api-rest

Esta es una API Rest realizada con las siguientes tecnologias :

- Bun
- Elisya
- Typescript

## Instalación de dependencias

```bash
    cd /08-api-rest
    bun install //  Instalamos todas las dependencias
```

## Configuración de base de datos

Para correr localmente, se necesita la base de datos para eso se debe ejecutar con:

Mongodb Url puede ser con mongo atlas o de forma local :

```ts
    // Ejemplo: 

    //Local
    mongodb://localhost:27017/nombre_de_tu_base
    
    // Con MongoDb atlas:
    mongodb+srv://nombre:clave@cluster0.rzspxqi.mongodb.net/nombre_de_tu_base?retryWrites=true&w=majority
```

Para visualizar mejor nuestra colecciones podemos utilizar MongoDB Compass.

## Configurar las variables de entorno

Renombrar el archivo  __.env.template__ a __.env__ y configurar las variables de entorno.

## Comandos de consola

```js
    bun run dev          // Ejecución en modo desarrollo
    bun run build        // Para hacer un build de nuestra api
```

```
📁 src
|__ 📁 controllers
|   ├── static-data.controller.ts
|   |__ users.controller.ts
|__ 📁 database
|   |__ db.setup.ts
|__ 📁 entities
|   |__ user.schema.ts
|__ 📁 startup
|   ├── docs.ts
|   ├── hooks.ts
|   |__ security.ts
📁 test
    |__ users.test.ts
.env
package.json
```
