# CRM

Para sumergirnos un poco en bun probaremos cada funcionalidad de su API armando una aplicación crm.

## Dev server

- Iniciar el server:

```bash
bun --hot run src/server.ts
O
bun run start // correr servidor de bun.
```

## Instalar y correr tailwind

Tailwind realizara una compilacion donde generara el css
de nuestra aplicación en el la ruta que le indiquemos en su archivo de configuración este archivo va a ir directamente a la carpeta public que va a ser servido como el css de toda la app cuando este en produccion.

Creamos el archivo de configuracion **tailwind.config.cjs** y **style.css** en **front/**.

```bash
    bunx tailwindcss -c ./front/tailwind.config.cjs -i front/styles.css -o public/output.css --watch

    o utilizando el flag custom

    bun run build:tailwind
```

## Bundle Crm modo producción

Compilar todos los archivos con:

```bash
 bun --watch build ./src/crm.ts --outdir ../../public
 o 
 bun run front
```
