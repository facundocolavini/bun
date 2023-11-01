
# TODOs

Esta sera una aplicacción que se renderiza del lado cliente.

**Server:**

- [x] Crear un http server basico.
- [x] Devolver un html vacio.
- [x] Servir assets estáticos desde un servidor HTTP.
- [x] Definir una carpeta publica para servir nuestros arhivos publicos.
- [x] Utilizando Bun streaming file para transmitir los archivos en el cuerpo de las respuestas.Dependiendo de la URL se devolvera un archivo del servido o una pagina.
- [x] Cambiar la configuracion asi el bundler de bun puede agregar el archivo crm.js dentro de la carpeta que corresponde.Para este caso lo queremos poner dentro de public.
- [x] Ejecutar el bundler para mirar los cambios en un archivo y volver a compilarlo. Utilizando la bandera --watch que nos da bun.
- [x] Integrar tailwindcss para construir el css de la aplicación creando tailwind.config.cjs .
- [x]  Guardar el codigo html dentro de un archivo, para que tailwind pueda verlo y procesar las clases.Utilizando Bun.file le vamos a indicar de donde va a obtener el index.html en este caso de front/views.
- [x] Incluir el archivo css en mi archivo index.html para leer los estilos.
- [x] Servir el archivo css desde mi servidor.
- [ ] Incluir en el bunler DOM API.Para poder obtener los valores y tipos basicos del DOM.

**Cliente**

- [ ] Renderizar columnas en mi page.
- [ ]
