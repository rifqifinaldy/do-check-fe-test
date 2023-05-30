import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../Types/todo.type";

interface ITodoList {
  todos: ITodo[];
}

const initialState: ITodoList = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload: { task, id, isCompleted } }) => {
      state.todos.push({ id, task, isCompleted });
    },
    deleteTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? payload : todo
      );
    },
    toggleTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
