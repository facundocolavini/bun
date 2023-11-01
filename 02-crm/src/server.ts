Bun.serve({
    port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    fetch(req) {
      const url = new URL(req.url);

      /* Paginas */
      if(url.pathname === "/"){
        return new Response(`
        <html>
        <head>
        <script defer src='/assets/crm.js'></script>
        </head>
         <body>
         <h1>Hola desde bun</h1>
         </body>
        </html>`, {
          headers: {
              "Content-type": "text/html",
              },
        });
      }
      /* Js */
      if (url.pathname === "/assets/crm.js") {
        // Devolvemos el archivo crm.js
        return new Response(Bun.file("./public/crm.js"), {});
      }
      return new Response("Not found", {
        status: 404,
        statusText: "not found",
        headers: {
          "Content-type": "text/plain",
        },
      });
    },
  });
  