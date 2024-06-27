import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Pokemon from "./components/Pokemon";
import Main from "./components/Main";
import { usePokemon } from "./customHooks/usePokemon";
import Buttons from "./components/Buttons";

function App() {
  const [query, setQuery] = useState("");
  const [pastPokemon, setPastPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const { isLoading, error, pokemon } = usePokemon(
    query,
    pastPokemon,
    setPastPokemon,
    pokemonData,
    setPokemonData
  );

  return (
    <>
      <h1>Pokemon Search</h1>
      <SearchBar setQuery={setQuery} />
      <div className="container">
        {isLoading && <Loader />}
        {error && <Error error={error} />}
        {!isLoading && !error && pokemon && (
          <Main>
            <Pokemon pokemon={pokemon} />
            <Buttons updateQuery={setQuery} id={pokemon.id} />
          </Main>
        )}
      </div>
    </>
  );
}

export default App;
