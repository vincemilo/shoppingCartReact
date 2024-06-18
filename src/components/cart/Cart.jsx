import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [clickHandler, cartItems] = useOutletContext();
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((e) => {
          return (
            <li key={e.id}>
              Id:{e.id}, Quantity:{e.quantity}
            </li>
          );
        })}
      </ul>
    </>
  );
}
