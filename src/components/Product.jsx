import { useState, useEffect } from "react";

export default function Product() {
  const [product, setProduct] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      let result = "https://fakestoreapi.com/products?limit=1";
      try {
        const response = await fetch(result, { mode: "cors" });
        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="prod-title">{product.title}</div>{" "}
      <div className="prod-price">${product.price}</div>
      <img className="prod-image" src={product.image} />
    </>
  );
}
