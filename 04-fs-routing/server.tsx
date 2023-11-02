import { serve } from 'bun';
import {renderToString} from 'react-dom/server';

const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./pages"
  });
  
  const match = router.match("/blog/my-cool-post");
  match?.filePath; // "/path/to/pages/blog/[slug].tsx",
  match?.kind; // "dynamic"
  match?.params; // { slug: "my-cool-post" }
  

  const server = Bun.serve({
    port:3000,
    async fetch(req) {
      const match = router.match(req);

      if(match){
        const Component = (await import(match.filePath)).default;

        return new Response(renderToString(<Component />));
      } 
      return new Response("Not Found",{status:404});
    }

  });

  console.log(`Server running at http://localhost:${server.port}`)