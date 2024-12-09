import { useContext, createContext } from "react";

// NOTE - also add description later on
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Todo Title",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// custom hooks
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
