import { useOutletContext } from "react-router-dom";
import UpdateQuantity from "../updateQuantity/UpdateQuantity";
import styles from "../../styles.module.css";
import CheckoutButton from "../checkoutButton/CheckoutButton";

export default function Cart() {
  const [, cartItems, total, updateCart, clearCart] = useOutletContext();

  return (
    <div className={styles.cart}>
      {cartItems.length ? (
        cartItems.map((e) => {
          return (
            <ul key={e.id} className={styles["cart-prod"]}>
              <li>
                <img src={e.image} className={styles["cart-img"]} />
              </li>
              <li> {e.title}</li>
              <li>${e.price.toFixed(2)}</li>
              <li>
                <UpdateQuantity
                  quantity={e.quantity}
                  updateQuantity={updateCart}
                  item={e}
                />
              </li>
            </ul>
          );
        })
      ) : (
        <div>Your cart is currently empty</div>
      )}
      <div>Subtotal: ${total.toFixed(2)}</div>
      <CheckoutButton clearCart={clearCart} />
    </div>
  );
}
