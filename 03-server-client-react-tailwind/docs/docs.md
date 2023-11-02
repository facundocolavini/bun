# CRM

Para sumergirnos un poco en bun probaremos cada funcionalidad de su API armando una aplicación crm.

## Dev server

- Iniciar el server:

- **cd /03-server-client-react-tailwind** y correr:

    ```bash
    bun --hot run src/server.ts
    O
    bun run server // correr servidor de bun.
    ```

## Instalar y correr tailwind

Tailwind realizara una compilacion donde generara el css
de nuestra aplicación en el la ruta que le indiquemos en su archivo de configuración este archivo va a ir directamente a la carpeta public que va a ser servido como el css de toda la app cuando este en produccion.

Creamos el archivo de configuracion **tailwind.config.cjs** y **style.css** en **front/**. Esto es para poder compilar todo lo que tengamos en el front a public.

- **cd /03-server-client-react-tailwind** y correr:

```bash
    bunx tailwindcss -c ./front/tailwind.config.cjs -i front/styles.css -o public/output.css --watch

    o utilizando el flag custom

    bun run build:tailwind
```

## Bundler modo producción

Compilar todos los archivos con:

- cd **/front/app** y correr :
  
```bash
 bun --watch build ./src/main.tsx --outdir ../../public
 o 
 bun run front
```

## Build base.ts

El archivo base tiene algunas utilidades que puedo usar en cualquier otro archivo lo que estas son funciones fundamentales.
