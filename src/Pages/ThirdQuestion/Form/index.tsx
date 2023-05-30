import styles from "./styles.module.scss";
import { ChangeEvent } from "react";
import Input from "../../../Components/Input";
import Button, { ButtonVariant } from "../../../Components/Button";
import { ITodo } from "../../../Types/todo.type";

interface ITodoFormProps {
  add: (e: React.FormEvent<HTMLFormElement>, todo: ITodo) => void;
  edit: (e: React.FormEvent<HTMLFormElement>, todo: ITodo) => void;
  cancel: (e: React.MouseEvent<HTMLElement>, todo: ITodo) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  todo: ITodo;
  isEdit: boolean;
}

const TodoForm: React.FC<ITodoFormProps> = ({
  add,
  edit,
  cancel,
  onChange,
  todo,
  isEdit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, todo: ITodo) => {
    isEdit ? edit(e, todo) : add(e, todo);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, todo)}>
      <h2>Create new Task</h2>
      <Input
        id="task"
        label="What do you like to add ?"
        type="text"
        value={todo.task}
        onChange={onChange}
        required={true}
        minLength={3}
        maxLength={25}
      />
      <div className={styles["button-controller"]}>
        <Button block={true} type="submit" variant={ButtonVariant.PRIMARY}>
          {isEdit ? "Edit this Task" : "Add to List"}
        </Button>
        {isEdit && (
          <Button
            onClick={(e) => cancel(e, todo)}
            block={true}
            type="button"
            variant={ButtonVariant.SECONDARY}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
