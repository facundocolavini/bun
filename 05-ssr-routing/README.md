# 05-react-ssr

Realizamos un bundler con el bundler de Bun donde ejecuta codigo tsx del lado servidor e hidrata la aplicación con react-dom y lo compila en la carpeta build para produccion.Tambien manejamos el routing con la estructura de directorios al igual que lo hace nextjs.

Como bun todavia no sporta statSync de fs y otras funciones , se debe instalar nativamente.

```bash
bun install
```

To run:

```bash
bun run index.ts
```
