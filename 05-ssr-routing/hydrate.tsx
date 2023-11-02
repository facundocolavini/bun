import { hydrateRoot } from "react-dom/client";
declare var globalThis: {
    [key: string]: any;
  };
  
  // If you are using TypeScript 4.2 or later, you can use the built-in `globalThis` type:
  // declare var globalThis: GlobalThis;
  
const { default: App } = await import(globalThis?.PATH_TO_PAGE!);

hydrateRoot(document , <App />);