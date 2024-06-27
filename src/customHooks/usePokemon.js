import { useEffect, useRef, useState } from "react";


export function usePokemon(query,
  pastPokemon,
  setPastPokemon,
  pokemonData,
  setPokemonData){

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const found = useRef(false)

  function handleAddPokemon(data) {

    let flag = false

    pastPokemon.forEach((p) => {
      if (p.find((v) => v === query)){
          flag = true
          return;
      }
    })

    if (!flag){
      setPastPokemon((pp) => [...pp, [data.id, data.name]])
      setPokemonData((pd) => ({...pd, [data.id]: {"id":data.id, "name": data.name, "sprite": data.sprites.front_default}}));
    }
    
  }

  useEffect(() => {
    async function fecthPokemon() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

        if (!res.ok) {
          setPokemon(null)
          throw new Error(
            "Pokémon Not Found!"
          );
        }
        const data = await res.json();

        if (data.Response === "False") {
          setPokemon(null)
          throw new Error("Pokémon Not Found!");
        }

        setPokemon({"id":data.id, "name": data.name, "sprite": data.sprites.front_default});
        handleAddPokemon(data)
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  
    if (pastPokemon.length > 0){
      pastPokemon.forEach((p) => {
        if (p.find((v) => v === query)){
            setPokemon(pokemonData[p[0]])
            found.current = true
            setError("")
            return;
        }
      })
    }
    if (!found.current && (query.length > 0 || typeof query === "number")){
      fecthPokemon();
    }
    found.current = false
  }, [query]);

  return {isLoading, error, pokemon}
}