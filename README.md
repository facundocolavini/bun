# Introducción

Este repositorio aprenderemos las bases y funcionamientos que tiene bun 1.0.

Nos basaremos de la documentación oficial de bun, la cual puedes encontrar:

- [https://bun.sh/docs](https://bun.sh/docs)

## Que vamos a aprender en este repositorio

- Repasaremos la documentación oficial de bun, y aprenderemos a instalar bun en nuestro sistema operativo (Windows o Linux).
- Veremos la API de bun, y a crear pequeños proyectos con bun.

## ¿Qué es bun.sh?

Bun es un conjunto de herramientas todo en uno para aplicaciones JavaScript y TypeScript. Se distribuye como un solo ejecutable llamado bun.

En su núcleo se encuentra el tiempo de ejecución de Bun, un tiempo de ejecución de JavaScript rápido diseñado como un reemplazo directo para Node.js. Está escrito en Zig y está impulsado por JavaScriptCore bajo el capó, lo que reduce drásticamente los tiempos de inicio y el uso de memoria.

La herramienta de línea de comandos de bun implementa un corredor de pruebas, un corredor de scripts y un administrador de paquetes compatible con Node.js, todos considerablemente más rápidos que las herramientas existentes y utilizables en proyectos de Node.js existentes con cambios mínimos o nulos necesarios.

Algunos ejemplos de comandos que podes ejecutar con bun son:

```bash
bun run start                 # run the `start` script
bun install <pkg>​             # install a package
bun build ./index.tsx         # bundle a project for browsers
bun test                      # run tests
bunx cowsay "Hello, world!"   # execute a package
```

## Instalación

Para instalar bun en tu sistema operativo, podes hacerlo de dos formas:

### 1 - Instalar bun en Windows

  Actualmente no hay una versión de bun para Windows, pero podemos instalarlo usando WSL (Windows Subsystem for Linux) y seguir los pasos de instalación para Linux.
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

- **Instalar WSL**: [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- **Asegurar que windows subsystem este activado en las windows features**:

  ![image](https://github.com/facundocolavini/bun/assets/54385792/539e0276-43a1-4ede-9160-3be9d80f1b57)


- **Agregar una distribución de Linux**: [https://docs.microsoft.com/en-us/windows/wsl/install-manual](https://docs.microsoft.com/en-us/windows/wsl/install-manual)

- **Abrir la distribución de Ubuntu:**
  - Configurar nombre y password  para la configuración.
  
  ![image](https://github.com/facundocolavini/bun/assets/54385792/e62383bb-4f6a-4def-b8b4-1c908b327b43)

  ![image](https://github.com/facundocolavini/bun/assets/54385792/83d247af-cc5b-4f58-9e94-ad59184d0460)


  - **Crear carpeta del proyecto e instalar bun**:
    - cd/proyecto
    - sudo apt install unzip
    - curl -fsSL <https://bun.sh/install> | bash
  
    ![image](https://github.com/facundocolavini/bun/assets/54385792/a0601c0b-343d-4fb0-a42c-aeada11346ed)


### 2 - Instalar bun en Linux

- Instalar bun: [https://bun.sh/docs/installation](https://bun.sh/docs/installation)


# Plantillas (Templating)

  ## Bun init 

  Crear un proyecto Bun vacío con el comando interactivo bun init.

  ```bash
  bun init            // bun init te ayuda a empezar con un proyecto mínimo.
  bun init -y         // Para aceptar automáticamente las configuraciones predeterminadas. 
  bun run index.ts    // Punto de entrada.
  ```



  **/bun-initial** 

  + index.ts
  + .gitignore
  + tsconfig.json (para el autocompletado del editor)
  + README.md

  ![image](https://github.com/facundocolavini/bun/assets/54385792/cd21f49c-76ca-4608-bd2d-c3e2d4385b1d)

  ## Bun create 

  Crea un nuevo proyecto Bun con bun create. Este es un comando flexible que se puede utilizar para crear un nuevo proyecto con un paquete npm create-<template>, un repositorio de GitHub o un template local.

  Si es un proyecto vacio se recomienda crearlo con **bun init**.

  Templates disponibles:
  
  ![image](https://github.com/facundocolavini/bun/assets/54385792/967f2f3c-14de-4037-ba87-c3737da6b5bc)

  ## Desde npm 
  Suponiendo que no tengas un template local con el mismo nombre, este comando descargará y ejecutará el paquete create-<template> desde npm.

  ```bash
  
  bun create <template> [<destination>] // Es identico a npm install create-<template>
  
  // Ejemplo estas 2 lineas son iguales y hacen lo mismo:
  
  bun create remix
  bunx create-remix
  
  ```
  ## Desde Guithub
  Podemos descargar repositorios de Github a nuestro disco.
  
  ```bash
  bun create <user>/<repo>
  bun create github.com/<user>/<repo>
  ```
  Opcionalmente, puedes especificar un nombre para la carpeta de destino. Si no se especifica ningún destino, se usará el nombre del repositorio.
  
  ```bash
  // https://github.com/facundocolavini/bun.git

  bun create <user>/<repo> mydir
  bun create github.com/<user>/<repo> mydir
  ```

  Bun realizará los siguientes pasos:

  - Descargar el template.
  - Copiar todos los archivos del template en la carpeta de destino.
  - Instalar las dependencias con bun install.
  - Inicializar un nuevo repositorio Git. Puedes evitar esto con la bandera --no-git.
  - Ejecutar el script de inicio configurado en el template, si está definido.
  
Por defecto, Bun no sobrescribirá archivos existentes. Usa la bandera --force para sobrescribir archivos existentes si es necesario.