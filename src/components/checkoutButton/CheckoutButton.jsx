export default function CheckoutButton({ clearCart }) {
  const clickHandler = () => {
    clearCart();
    return alert("Thank you for your order!");
  };
  return <button onClick={clickHandler}>Checkout</button>;
}
