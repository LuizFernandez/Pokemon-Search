import PropTypes from "prop-types";

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <p>{pokemon?.name}</p>
      <p>{pokemon?.id}</p>
      <img src={pokemon?.sprite} alt={`${pokemon?.name} sprite`} />
    </div>
  );
}

export default Pokemon;
