import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "../../styles.module.css";

export default function NavBar({ itemCount }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="products">Products</Link>
      <Link to="cart">
        <CartWidget count={itemCount} />
      </Link>
    </div>
  );
}
