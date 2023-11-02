import { serve } from 'bun';
import {renderToReadableStream, renderToString} from 'react-dom/server';

const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./pages"
  });
  const PROJECT_ROOT = import.meta.dir;
  const PUBLIC_DIR = Bun.file(`${PROJECT_ROOT}/public`);
  const BUILD_DIR =  Bun.file(`${PROJECT_ROOT}/build`);

  console.log(BUILD_DIR)
  const server = Bun.serve({
    port:3000,
    async fetch(req) {
      const match = router.match(req);

      if(match){
        const Component = (await import(match.filePath)).default;
        const stream = await renderToReadableStream(<Component  />);
        return new Response(stream,{
           headers: {
            'Content-type': 'text/html'
           }
        })
      } 
      return new Response("Not Found",{status:404});
    }

  });

  console.log(`Server running at http://localhost:${server.port}`)