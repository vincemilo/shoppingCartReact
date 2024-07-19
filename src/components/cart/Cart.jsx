import { useOutletContext } from "react-router-dom";
import UpdateQuantity from "../updateQuantity/UpdateQuantity";
import styles from "../../styles.module.css";

export default function Cart() {
  const [, cartItems, total, updateQuantity] = useOutletContext();

  return (
    <>
      {cartItems.length ? (
        cartItems.map((e) => {
          return (
            <ul key={e.id} className={styles["cart-prod"]}>
              <li>
                <img src={e.image} className={styles["cart-img"]} />
                <li> {e.title}</li>
              </li>
              <li>${e.price.toFixed(2)}</li>
              <li>
                <UpdateQuantity
                  quantity={e.quantity}
                  updateQuantity={updateQuantity}
                  item={e}
                />
              </li>
            </ul>
          );
        })
      ) : (
        <div className={styles["cart-empty"]}>Your cart is currently empty</div>
      )}

      <div className={styles.subtotal}>Subtotal: ${total.toFixed(2)} </div>
    </>
  );
}
