import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartButton from "../cartButton/CartButton";

export default function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let result = `https://fakestoreapi.com/products/${id}`;
      try {
        const response = await fetch(result, { mode: "cors" });
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log(product);
  return (
    <div className="product">
      <img className="prod-image" src={product.image} />
      <div className="prod-title">{product.title}</div>
      <div className="prod-rating">Rating: {product.rating.rate} / 5</div>
      <div className="prod-price">${product.price}</div>
      <div>{product.description}</div>
      <CartButton />
    </div>
  );
}
