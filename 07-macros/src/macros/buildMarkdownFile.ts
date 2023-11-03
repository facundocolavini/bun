import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import {parse} from "marked";

// Lectura de nuestro directorio y acceso a directorio con macro
export async function buildMarkdownFiles(){
    const docsDir = `${process.cwd()}/docs`;
        
    // Convertimos archivos Markdown a HTML utilizar libreria marked 
    const docsHtmlDir = `${process.cwd()}/docs-html`;
    if(!existsSync(docsHtmlDir)){
        mkdirSync(docsHtmlDir);
    }
    
    const pages:string[] = [];
    for (const file of readdirSync(docsDir)){
        if(file.endsWith(".md")){
            const baseName = file.replace(".md","");
            pages.push(baseName);

            // Leemos el archivo y creamos el archivo con Bun 
            const mdFile =  await Bun.file(`${docsDir}/${file}`);
            const md = await mdFile.text();
            const content =  parse(md);
            
            // Escribe los archivos html
            Bun.write(`${docsHtmlDir}/${baseName}.html`,content)
        }else{
            //Copiar cualquier archivo 
            copyFileSync(`${docsDir}/${file}`,`${docsHtmlDir}/${file}`)
        }
    }

    return pages;
}

