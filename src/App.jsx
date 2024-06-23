import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const clickHandler = (item, num = 1) => {
    const newCart = cartItems;
    const i = newCart.findIndex((e) => e.id === item.id);
    if (i > -1)
      newCart[i] = { ...newCart[i], quantity: newCart[i].quantity + num };
    else
      newCart.push({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: num,
      });
    setCartItems(newCart);
    setTotal(total + item.price * num);
    setItemCount(itemCount + num);
  };

  return (
    <>
      <NavBar itemCount={itemCount} />
      <Outlet context={[clickHandler, cartItems, total]} />
    </>
  );
};

export default App;
