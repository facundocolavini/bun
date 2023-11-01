Bun.serve({
    port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    fetch(req) {
      return new Response("Hello from bum!");
    },
  });
  