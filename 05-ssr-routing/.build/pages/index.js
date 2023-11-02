import {
Layout
} from "../chunk-286d0a356aa2aa07.js";
import {
__toESM,
require_jsx_dev_runtime
} from "../chunk-5dab5d4ba6f20a11.js";

// pages/contactscheduler/c
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ListTodos = ({ todos }) => {
  return jsx_dev_runtime.jsxDEV("div", {
    className: "max-w-md mx-auto mt-8",
    children: jsx_dev_runtime.jsxDEV("ul", {
      className: "grid gap-4",
      children: todos.map((todo) => jsx_dev_runtime.jsxDEV("li", {
        className: "p-4 border rounded-md shadow-md flex items-center justify-between",
        children: [
          jsx_dev_runtime.jsxDEV("div", {
            className: `text-lg font-semibold ${todo.status === "finish" ? "text-green-600" : todo.status === "pending" ? "text-yellow-600" : "text-blue-600"}`,
            children: todo.status === "finish" ? "\u2714\uFE0F" : todo.status === "pending" ? "\u23F3" : "\u27A1\uFE0F"
          }, undefined, false, undefined, this),
          jsx_dev_runtime.jsxDEV("div", {
            className: "ml-4",
            children: todo.description
          }, undefined, false, undefined, this)
        ]
      }, todo.id, true, undefined, this))
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var ListTodos_default = ListTodos;

// pages/conta
var TODOS_DB = [
  {
    id: 1,
    status: "finish",
    description: "Tarea terminada"
  },
  {
    id: 2,
    status: "pending",
    description: "Tarea Pendiente"
  },
  {
    id: 3,
    status: "in-progress",
    description: "Tarea en progreso"
  }
];
// pages/contactsc
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var HomePage = () => {
  return jsx_dev_runtime2.jsxDEV(Layout, {
    title: "Home",
    children: jsx_dev_runtime2.jsxDEV(ListTodos_default, {
      todos: TODOS_DB
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var pages_default = HomePage;
export {
  pages_default as default
};
