import styles from "./styles.module.scss";
import { createContext, useState } from "react";
import Input from "../../Components/Input";
import useSearchable from "../../Hooks/useSearchable";

export const SearchContext = createContext<any[]>([]);

interface IItemContextProps {
  children: React.ReactNode;
  value: any[];
  placeholder: string;
  keyValue: string[];
  title?: string;
}

const SearchProvider: React.FC<IItemContextProps> = ({
  children,
  value,
  placeholder,
  keyValue,
  title,
}) => {
  const [query, setQuery] = useState<string>("");
  const { search } = useSearchable();

  return (
    <SearchContext.Provider value={search(value, keyValue, query)}>
      <div className={styles["search-header"]}>
        {title && <h4>{title}</h4>}
        <Input
          id="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
          type="text"
          label={placeholder}
        />
      </div>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
