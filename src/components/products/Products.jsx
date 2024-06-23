import { Link, useOutletContext } from "react-router-dom";
import CartButton from "../cartButton/CartButton";
import useFetch from "../../useFetch";

export default function Products() {
  const [handleClick] = useOutletContext();
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=9"
  );
  let products = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className="products">
      {products.map((e) => (
        <div key={e.id}>
          <Link to={`${e.id}`} className="product">
            <img className="prod-image" src={e.image} />
            <div className="prod-title">{e.title}</div>
            <div className="prod-rating">Rating: {e.rating.rate} / 5</div>
            <div className="prod-price">${e.price}</div>
          </Link>
          <CartButton onClick={handleClick} item={e} />
        </div>
      ))}
    </div>
  );
}
