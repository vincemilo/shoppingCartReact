import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [, cartItems] = useOutletContext();
  console.log(cartItems);
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.length ? (
          cartItems.map(({ id, quantity }) => {
            return (
              <li key={id}>
                Id:{id}, Quantity:{quantity}
              </li>
            );
          })
        ) : (
          <li>Your cart is currently empty</li>
        )}
      </ul>
    </>
  );
}
