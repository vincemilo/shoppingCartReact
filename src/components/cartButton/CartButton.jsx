import PropTypes from "prop-types";

export default function CartButton({ onClick }) {
  return <button onClick={() => onClick()}>Add to Cart</button>;
}

CartButton.propTypes = {
  onClick: PropTypes.func,
};
