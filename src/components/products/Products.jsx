import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let result = "https://fakestoreapi.com/products?limit=9";
      try {
        const response = await fetch(result, { mode: "cors" });
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="products">
      {products.map((e) => (
        <div className="product" key={e.id}>
          <img className="prod-image" src={e.image} />
          <div className="prod-title">{e.title}</div>
          <div className="prod-rating">Rating: {e.rating.rate} / 5</div>
          <div className="prod-price">${e.price}</div>
        </div>
      ))}
    </div>
  );
}
