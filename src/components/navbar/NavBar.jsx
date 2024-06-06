import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="products">Products</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
}
