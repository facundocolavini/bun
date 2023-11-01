# Introducción

Este repositorio aprenderemos las bases y funcionamientos que tiene bun 1.0.

Nos basaremos de la documentación oficial de bun, la cual puedes encontrar:

- [https://bun.sh/docs](https://bun.sh/docs)

## Que vamos a aprender en este repositorio

- Repasaremos la documentación oficial de bun, y aprenderemos a instalar bun en nuestro sistema operativo (Windows o Linux).
- Veremos la API de bun, y a crear pequeños proyectos con bun.

- Bun init
- bun run
- Bun server
- watch mode
- hot reload
- Variables de entorno (env)
- Bun scripts
- Simple Routes
- Node Cores modules
- File I/O API
- Testing
- Bundler
- Bun build
- Bundler watch mode
- React & JSX

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
Hay una forma de utilizar bun con docker pero es experimental de momento.

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

# Packages Manager

El CLI de Bun contiene un administrador de paquetes compatible con Node.js diseñado para ser un reemplazo para npm, yarn y pnpm es considerablemente más rápido. Es una herramienta independiente que funcionará en proyectos de Node.js preexistentes.Si nuestro proyecto tiene un package.json, **bun install** puede ayudarte a acelerar tu flujo de trabajo.

## Correr flags y packages json

  bun [bun flags] run <script> [script flags]

  ```bash
  bun add zod@latest          To add a particular package
  bun add -d @types/figlet    Add types to devDependecies 
  bun add --dev @types/react  Add types to devDependecies 
  bun remove                  To remove a dependency
  bun update                  To update all dependencies to the latest version
  bun link                    Use bun link in a local directory to register the current package as a "linkable" package.
  bun pm                      The bun pm command group provides a set of utilities for working with Bun's package manager.

  CLI flags

  --force                     Overwrite existing files
  --no-install                Skip installing node_modules & tasks
  --no-git                    Don’t initialize a git repository
  --open                      Start & open in-browser after finish
  --watch                     To run a file in watch mode, use the --watch flag.
  --smol                      In memory-constrained environments, use the --smol flag to reduce memory usage at a cost to performance.
  ```

# Lifecycle scripts

  A diferencia de otros clientes de npm, Bun no ejecuta scripts de ciclo de vida arbitrarios como postinstall para las dependencias instaladas. Ejecutar scripts arbitrarios representa un posible riesgo de seguridad.

  Para indicar a Bun que permita scripts del ciclo de vida para un paquete en particular, agrega el paquete a trustedDependencies en tu archivo  package.json.
  
- preinstall: Se ejecuta antes de que el paquete sea instalado.
- postinstall: Se ejecuta después de que el paquete es instalado.
- preuninstall: Se ejecuta antes de que el paquete sea desinstalado.
- prepublishOnly: Se ejecuta antes de que el paquete sea publicado, pero solo cuando estás ejecutando npm publish.
  
# Workspaces

  Bun admite espacios de trabajo (workspaces) en el archivo package.json. Los espacios de trabajo facilitan el desarrollo de software complejo como un monorepo que consiste en varios paquetes independientes. Esta funcionalidad permite gestionar y organizar múltiples paquetes dentro del mismo repositorio, lo que simplifica el proceso de desarrollo y la gestión de dependencias en proyectos grandes y complejos.
  
  Beneficios de usar Workspaces:
  El código puede dividirse en partes lógicas. Si un paquete depende de otro, simplemente puedes agregarlo como una dependencia en package.json. Si el paquete b depende de a, bun install instalará tu paquete local en el directorio packages/a en node_modules en lugar de descargarlo del registro npm.

  Las dependencias pueden ser deduplicadas. Si a y b comparten una dependencia común, esta será elevada (hoisted) al directorio raíz node_modules. Esto reduce el uso redundante de espacio en disco y minimiza los problemas de "infierno de dependencias" asociados con tener múltiples versiones de un paquete instaladas simultáneamente.

- [Como podemos hacer workspaces](https://bun.sh/guides/install/workspaces)

# Plantillas (Templating)

## Bun init

  Crear un proyecto Bun vacío con el comando interactivo bun init.

  ```bash
  bun init            // bun init te ayuda a empezar con un proyecto mínimo.
  bun init -y         // Para aceptar automáticamente las configuraciones predeterminadas. 
  bun run index.ts    // Punto de entrada.
  ```

  **/bun-initial**

- index.ts
- .gitignore
- tsconfig.json (para el autocompletado del editor)
- README.md

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
  Algunos templates creados por la comunidad de bun :

  <https://github.com/bun-community/create-templates>
  
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

# Typescript
  
  Bun soporta nativamente TypeScript desde el principio. Todos los archivos son transpilados al vuelo por el rápido transpilador nativo de Bun antes de ser ejecutados. Similar a otras herramientas de construcción, Bun no realiza la comprobación de tipos; simplemente elimina las anotaciones de tipo del archivo.

## Configuraciónes necesarias

  ```bash
    bun add -d bun-types #  Install the TypeScript definitions for Bun's built-in APIs, install bun-types.
  ```

  Bun admite cosas como la espera en el nivel superior, JSX y las importaciones .ts extendidas, las cuales TypeScript no permite por defecto. A continuación, se muestra un conjunto de compilerOptions recomendadas para un proyecto de Bun, para que puedas utilizar estas características sin ver advertencias del compilador de TypeScript.

  ```bash
{
  "compilerOptions": {
    // add Bun type definitions
    "types": ["bun-types"],

    // enable latest features
    "lib": ["ESNext"],
    "module": "esnext",
    "target": "esnext",

    // if TS 5.x+
    "moduleResolution": "bundler",
    "noEmit": true,
    "allowImportingTsExtensions": true,
    "moduleDetection": "force",
    // if TS 4.x or earlier
    // "moduleResolution": "nodenext",

    "jsx": "react-jsx", // support JSX
    "allowJs": true, // allow importing `.js` from `.ts`

    // best practices
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "composite": true,
    "downlevelIteration": true,
    "allowSyntheticDefaultImports": true
  }
}

  ```

# Variables de entorno

  Bun lee automáticamente tus archivos `.env` y proporciona formas idiomáticas de leer y escribir tus variables de entorno programáticamente. Además, algunos aspectos del comportamiento en tiempo de ejecución de Bun pueden ser configurados mediante variables de entorno específicas de Bun. Esto facilita la gestión de las variables de entorno y la configuración de la aplicación al utilizar Bun como herramienta de desarrollo.

## Configurar variables de entorno

  Bun lee automáticamente los siguientes archivos (listados en orden de creciente precedencia):

  **.env.defaults**
  **.env.local**
  **.env.development, .env.test, .env.production, respectivamente**
  **.env.local.js**
  **.env.local.json**
  **.env.local.yaml, .env.local.yml, respectivamente**
  **.env.local.toml**
  Se pueden modificar el valor de una variable de entorno de la siguiente forma

  ```bash
  process.env.FOO = "hello";
  o
  FOO=helloworld bun run dev
    
  ```

  Esto significa que las variables de entorno definidas en archivos con una precedencia más alta sobrescribirán las definidas en archivos con una precedencia más baja.

  Se podra leer las variables de entorno de la siguiente forma:

   ```bash
  process.env.API_TOKEN; // => "secret"
  o 
  Bun.env.API_TOKEN; // => "secret"
  ```

# JSX/TSX
  
Bun admite archivos .jsx y .tsx de forma predeterminada. El transpilador interno de Bun convierte la sintaxis JSX a JavaScript estándar antes de la ejecución.

## Configuración

 Bun lee tus archivos de configuración tsconfig.json o jsconfig.json para determinar cómo realizar la transformación JSX internamente. Para evitar el uso de alguno de estos, las siguientes opciones también se pueden definir en bunfig.toml.

 Se respetan las siguientes opciones del compilador:
  
- jsx: Cómo se transforman internamente las construcciones JSX a JavaScript estándar.
- jsxFactory: El nombre de función utilizado para representar las construcciones JSX. El valor predeterminado es "createElement". Esto es útil para bibliotecas como Preact que utilizan un nombre de función diferente ("h").
- jsxFragmentFactory: El nombre de la función utilizado para representar fragmentos JSX como <>Hello</>; solo aplicable cuando jsx es react. El valor predeterminado es "Fragment".
- jsxImportSource: El módulo desde el cual se importará la función del fabricante de componentes (createElement, jsx, jsxDEV, etc.). El valor predeterminado es "react". Esto será necesario normalmente al utilizar una biblioteca de componentes como Preact.
