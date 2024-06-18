import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const clickHandler = (itemId, num = 1) => {
    let newCart = [];
    if (cartItems.length) {
      newCart = cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return [...cartItems, { id: itemId, quantity: 1 }];
        }
      });
    } else {
      newCart = [{ id: itemId, quantity: 1 }];
    }
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
