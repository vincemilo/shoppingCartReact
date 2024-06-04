import Product from "./Product";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      let result = "https://fakestoreapi.com/products?limit=9";
      try {
        const response = await fetch(result, { mode: "cors" });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      {console.log(products)}
      {products === "Loading..."
        ? products
        : products.map((e) => <Product key={e.id} data={e} />)}
    </div>
  );
}
