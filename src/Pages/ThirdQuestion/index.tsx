import styles from "./styles.module.scss";
import PageHeader from "../../Components/Page-Header";
import { IPagesProps } from "../../Routes/App.Routes";
import TodoForm from "./Form";
import TodoSection from "./TodoSection";
import useTodos from "../../Hooks/useTodos";
import useInputField from "../../Hooks/useInputField";
import SearchProvider from "../../Context/SearchContext/search.context";

const ThirdQuestion: React.FC<IPagesProps> = ({ headers }) => {
  const {
    list,
    value,
    setValue,
    isEdit,
    onAdd,
    onDelete,
    onEdit,
    onCancel,
    selectTodo,
    setStatus,
  } = useTodos();
  const { handleChange } = useInputField();

  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />
      <TodoForm
        add={(e, value) => onAdd(e, value)}
        edit={(e, value) => onEdit(e, value)}
        cancel={(e, value) => onCancel(e, value)}
        isEdit={isEdit}
        todo={value}
        onChange={(e) => setValue(handleChange(e, value))}
      />
      <section className={styles["to-do-container"]}>
        <SearchProvider
          value={list}
          placeholder="Search a task..."
          keyValue={["task"]}
          title="Your Task"
        >
          <TodoSection
            onDeleteTodo={onDelete}
            onToggleTodo={setStatus}
            onToggleEdit={selectTodo}
          />
        </SearchProvider>
      </section>
    </>
  );
};

export default ThirdQuestion;
