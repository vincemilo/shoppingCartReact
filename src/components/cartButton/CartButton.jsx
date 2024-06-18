import PropTypes from "prop-types";

export default function CartButton({ onClick, id }) {
  return <button onClick={() => onClick(id)}>Add to Cart</button>;
}

CartButton.propTypes = {
  onClick: PropTypes.func,
};
