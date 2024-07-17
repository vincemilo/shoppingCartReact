export default function UpdateQuantity({ quantity, updateQuantity, item }) {
  return (
    <>
      <label>
        Quantity:
        <button onClick={() => updateQuantity(item, quantity - 1)}>-1</button>
        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={(e) => updateQuantity(item, Number(e.target.value))}
        />
      </label>
      <button onClick={() => updateQuantity(item, quantity + 1)}>+1</button>
    </>
  );
}
