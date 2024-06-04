export default function Product(props) {
  return (
    <div className="product">
      <img className="prod-image" src={props.image} />
      {props.title}
    </div>
  );
}
