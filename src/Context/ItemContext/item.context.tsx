import { createContext } from "react";
import { Iitem } from "../../Types/item.type";

export const itemContext = createContext<Iitem[] | undefined>(undefined);

interface IItemContextProps {
  children: React.ReactNode;
  value: Iitem[];
}

const ItemProvider: React.FC<IItemContextProps> = ({ children, value }) => {
  return <itemContext.Provider value={value}>{children}</itemContext.Provider>;
};

export default ItemProvider;
