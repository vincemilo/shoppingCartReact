import { useOutletContext, useParams } from "react-router-dom";
import CartButton from "../cartButton/CartButton";
import useFetch from "../../useFetch";
import styles from "../../styles.module.css";

export default function Product() {
  const [handleClick] = useOutletContext();
  let itemId = Number(useParams().id);
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${itemId}`
  );
  let product = data;
  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error)
    return <p className={styles.error}>A network error was encountered</p>;
  return (
    <div className={styles.product}>
      <img className={styles["prod-image"]} src={product.image} />
      <div className={styles["prod-title"]}>{product.title}</div>
      <div className={styles["prod-rating"]}>
        Rating: {product.rating.rate} / 5
      </div>
      <div className={styles["prod-price"]}>${product.price.toFixed(2)}</div>
      <div>{product.description}</div>
      <CartButton onClick={handleClick} item={product} />
    </div>
  );
}
