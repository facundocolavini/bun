const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(req){

        const url = new URL(req.url)
        if(url.pathname === '/') return new Response('HomePage!');
        if(url.pathname === '/blog') return new Response('Blog!');

        return new Response('404')
    }
})
/* Web server */
console.log('Listening on ' + server.port)