export default function UpdateQuantity({ quantity, updateQuantity, item }) {
  return (
    <>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={(e) => updateQuantity(item, Number(e.target.value))}
        />
      </label>
    </>
  );
}
