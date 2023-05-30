import { useState } from "react";
import { ITodo } from "../Types/todo.type";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "../Redux/todo";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const useTodos = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.todos.todos);
  const [value, setValue] = useState<ITodo>({
    id: Math.random().toString(),
    task: "",
    isCompleted: false,
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Store/Create Todo
  const onAdd = (e: React.FormEvent<HTMLFormElement>, todo: ITodo) => {
    e.preventDefault();
    setValue({
      id: Math.random().toString(),
      task: "",
      isCompleted: false,
    });
    dispatch(
      addTodo({ task: todo.task, id: Math.random(), isCompleted: false })
    );
  };

  // Delete/Remove Todo
  const onDelete = (todo: ITodo) => {
    dispatch(deleteTodo({ todoId: todo.id }));
  };

  // Update Todo Complete Status
  const onEdit = (e: React.FormEvent<HTMLFormElement>, todo: ITodo) => {
    e.preventDefault();
    dispatch(editTodo({ ...todo, task: todo.task }));
    setIsEdit(false);
    setValue({ ...todo, task: "" });
  };

  const onCancel = (e: React.MouseEvent<HTMLElement>, todo: ITodo) => {
    e.preventDefault();
    setIsEdit(false);
    setValue({ ...todo, task: "" });
  };

  // Get Selected Todo
  const selectTodo = (todo: ITodo) => {
    setIsEdit(true);
    setValue({ ...todo, task: todo.task });
  };

  // Toggle Todo
  const setStatus = (todo: ITodo) => {
    dispatch(toggleTodo({ todoId: todo.id }));
  };

  return {
    list,
    value,
    setValue,
    isEdit,
    onAdd,
    onDelete,
    onCancel,
    onEdit,
    selectTodo,
    setStatus,
  };
};

export default useTodos;
