import PropTypes from "prop-types";

Error.propTypes = {
  error: PropTypes.string,
};

function Error({ error }) {
  return <p>{error}</p>;
}

export default Error;
