export interface Todo {
    id: number;
    status: TodoStatus;
    description: string;
  }
  
  export type TodoStatus = "finish" | "pending" | "in-progress";
