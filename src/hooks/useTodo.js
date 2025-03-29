import { useContext } from "react";
import { TodoContext } from "../contexts";

export const useTodo = () => {
  return useContext(TodoContext);
};
