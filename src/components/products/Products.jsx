import { Link, useOutletContext } from "react-router-dom";
import CartButton from "../cartButton/CartButton";
import useFetch from "../../useFetch";
import styles from "../../styles.module.css";

export default function Products() {
  const [handleClick] = useOutletContext();
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=9"
  );
  let products = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className={styles.products}>
      {products.map((e) => (
        <div key={e.id} className={styles["prod-cont"]}>
          <Link to={`${e.id}`} className={styles.product}>
            <img className={styles["prod-image"]} src={e.image} />
            <div className={styles["prod-title"]}>{e.title}</div>
            <div className={styles["prod-rating"]}>
              Rating: {e.rating.rate} / 5
            </div>
            <div className={styles["prod-price"]}>${e.price.toFixed(2)}</div>
          </Link>
          <CartButton onClick={handleClick} item={e} />
        </div>
      ))}
    </div>
  );
}
