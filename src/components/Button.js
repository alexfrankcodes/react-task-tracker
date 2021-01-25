import PropTypes from "prop-types";

const Button = ({ text, onClick }) => (
  <button onClick={onClick} className="btn">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
