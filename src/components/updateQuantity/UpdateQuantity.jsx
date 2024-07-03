export default function UpdateQuantity({ quantity }) {
  return (
    <>
      <label>
        Quantity:
        <input name="quantity">{quantity}</input>
      </label>
    </>
  );
}
