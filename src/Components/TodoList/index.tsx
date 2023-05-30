import styles from "./styles.module.scss";
import { ITodo } from "../../Types/todo.type";
import Checkboxes from "../Checkboxes";
import { RiEdit2Fill, RiDeleteBack2Fill } from "react-icons/ri";

interface ITodoProps extends ITodo {
  onCheck: (todo: ITodo) => void;
  onEdit: (todo: ITodo) => void;
  onDelete: (todo: ITodo) => void;
}

const TodoList: React.FC<ITodoProps> = ({
  onCheck,
  onEdit,
  onDelete,
  id,
  task,
  isCompleted,
}) => {
  return (
    <div
      className={
        isCompleted ? styles["todo-completed"] : styles["todo-incompleted"]
      }
    >
      <Checkboxes
        onChange={() => onCheck({ id, task, isCompleted })}
        checked={isCompleted ? true : false}
        label={task ? task : ""}
      />
      <div className={styles["todo-controller"]}>
        <RiEdit2Fill
          className={styles["edit-icon"]}
          onClick={() => onEdit({ id, task, isCompleted })}
        />
        <RiDeleteBack2Fill
          className={styles["delete-icon"]}
          onClick={() => onDelete({ id, task, isCompleted })}
        />
      </div>
    </div>
  );
};

export default TodoList;
