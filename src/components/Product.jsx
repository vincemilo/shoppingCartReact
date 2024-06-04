import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <Link to={props.data.id}>
      <div className="product">
        <img className="prod-image" src={props.data.image} />
        <div className="prod-title">{props.data.title}</div>
        <div className="prod-rating">Rating: {props.data.rating.rate} / 5</div>
        <div className="prod-price">${props.data.price}</div>
      </div>
    </Link>
  );
}
