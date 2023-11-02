Bun.serve({
    port: 3000, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    fetch(req) {
      const url = new URL(req.url);

      /* Paginas */
      if(url.pathname === "/"){
        return new Response(Bun.file('./front/views/index.html'), {
          headers: {
              "Content-type": "text/html",
              },
        });
      }
      /* Js */
      if (url.pathname === "/assets/main.js") {
        // Devolvemos el archivo crm.js
        return new Response(Bun.file("./public/main.js"), {});
      }

      /* CSS files */
      if(url.pathname === "/assets/output.css"){
        return new Response(Bun.file('./public/output.css'), {
          headers: {
              "Content-type": "text/css",
              },
        });
      }

      return new Response("Not found", {
        status: 404,
        statusText: "No se encontro",
        headers: {
          "Content-type": "text/plain",
        },
      });
    },
  });
  