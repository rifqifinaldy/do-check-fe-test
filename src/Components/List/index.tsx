import styles from "./styles.module.scss";
import { useContext } from "react";
import { itemContext } from "../../Context/ItemContext/item.context";
import { toDollar } from "../../Helpers/currency";
import { numeric } from "../../Helpers/numbering";

const Items = () => {
  const items = useContext(itemContext);

  if (items) {
    return (
      <div className={styles["items-wrapper"]}>
        {items.map((item) => (
          <div key={item.id} className={styles["item"]}>
            <h4 className={styles["item-name"]}>{item.name}</h4>
            <div className={styles["item-info"]}>
              <span className={styles["item-price"]}>
                {toDollar.format(item.price)}
              </span>
              <span className={styles["item-quantity"]}>
                <span className={styles["item-quantity-count"]}>
                  {numeric(item.quantity)}
                </span>
                items
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>No Items Found</div>;
  }
};

export default Items;
