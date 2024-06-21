import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const clickHandler = (itemId, num = 1) => {
    const newCart = cartItems;
    const i = newCart.findIndex((e) => e.id === itemId);
    if (i > -1)
      newCart[i] = { ...newCart[i], quantity: newCart[i].quantity + num };
    else newCart.push({ id: itemId, quantity: num });
    setCartItems(newCart);
    setItemCount(itemCount + num);
  };

  return (
    <>
      <NavBar itemCount={itemCount} />
      <Outlet context={[clickHandler, cartItems]} />
    </>
  );
};

export default App;
