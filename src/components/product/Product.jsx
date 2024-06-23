import { useOutletContext, useParams } from "react-router-dom";
import CartButton from "../cartButton/CartButton";
import useFetch from "../../useFetch";

export default function Product() {
  const [handleClick] = useOutletContext();
  let itemId = Number(useParams().id);
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${itemId}`
  );
  let product = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className="product">
      <img className="prod-image" src={product.image} />
      <div className="prod-title">{product.title}</div>
      <div className="prod-rating">Rating: {product.rating.rate} / 5</div>
      <div className="prod-price">${product.price}</div>
      <div>{product.description}</div>
      <CartButton onClick={handleClick} item={product} />
    </div>
  );
}
