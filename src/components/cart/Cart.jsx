import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [clickHandler, cartItems, total] = useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.length ? (
          cartItems.map((e) => {
            return (
              <li key={e.id}>
                <img src={e.image} className="cart-img" />, {e.title}, $
                {e.price}, Quantity:
                {e.quantity}
              </li>
            );
          })
        ) : (
          <li>Your cart is currently empty</li>
        )}
      </ul>
      <div>Subtotal: {total} </div>
    </>
  );
}
