import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({ itemCount }) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="products">Products</Link>
      <Link to="cart">
        <CartWidget count={itemCount} />
      </Link>
    </div>
  );
}
