import { useOutletContext } from "react-router-dom";
import UpdateQuantity from "../updateQuantity/UpdateQuantity";
import styles from "../../styles.module.css";

export default function Cart() {
  const [, cartItems, total, updateQuantity] = useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.length ? (
          cartItems.map((e) => {
            return (
              <li key={e.id}>
                <img src={e.image} className={styles["cart-img"]} />, {e.title},
                ${e.price},
                <UpdateQuantity
                  quantity={e.quantity}
                  updateQuantity={updateQuantity}
                  item={e}
                />
              </li>
            );
          })
        ) : (
          <li>Your cart is currently empty</li>
        )}
      </ul>
      <div>Subtotal: ${total.toFixed(2)} </div>
    </>
  );
}
