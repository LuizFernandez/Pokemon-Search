import { useRef, useState } from "react";
import PropTypes from "prop-types";
SearchBar.propTypes = {
  setQuery: PropTypes.func,
};

function SearchBar({ setQuery }) {
  const [type, setType] = useState("name");

  const inputEl = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputEl.current.value;
    if (type == "name") {
      setQuery(value.toLowerCase());
    } else {
      setQuery(value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Insert a Pokemon Name"
          ref={inputEl}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="name">Name</option>
          <option value="number">Pokedex Entry</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
