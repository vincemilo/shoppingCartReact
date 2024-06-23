import PropTypes from "prop-types";

export default function CartButton({ onClick, item }) {
  return <button onClick={() => onClick(item)}>Add to Cart</button>;
}

CartButton.propTypes = {
  onClick: PropTypes.func,
};
