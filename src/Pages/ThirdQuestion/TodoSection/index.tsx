import { useContext } from "react";
import TodoList from "../../../Components/TodoList";
import { SearchContext } from "../../../Context/SearchContext/search.context";
import { ITodo } from "../../../Types/todo.type";

interface ITodoSectionProps {
  onDeleteTodo: (todo: ITodo) => void;
  onToggleTodo: (todo: ITodo) => void;
  onToggleEdit: (todo: ITodo) => void;
}

const TodoSection: React.FC<ITodoSectionProps> = ({
  onDeleteTodo,
  onToggleTodo,
  onToggleEdit,
}) => {
  const todos = useContext(SearchContext);
  return (
    <>
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <TodoList
                key={todo.id}
                id={todo.id}
                task={todo.task}
                isCompleted={todo.isCompleted}
                onCheck={(value) => onToggleTodo(value)}
                onEdit={(value) => onToggleEdit(value)}
                onDelete={(value) => onDeleteTodo(value)}
              />
            );
          })
        : "No Records Found"}
    </>
  );
};

export default TodoSection;
