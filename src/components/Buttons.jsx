import PropTypes from "prop-types";

Buttons.propTypes = {
  updateQuery: PropTypes.func,
  id: PropTypes.number,
};

function Buttons({ updateQuery, id }) {
  return (
    <div className="buttons">
      <button onClick={() => updateQuery(id - 1)}>Previous</button>
      <button onClick={() => updateQuery(id + 1)}>Next</button>
    </div>
  );
}

export default Buttons;
