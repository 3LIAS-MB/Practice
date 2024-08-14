import { useEffect, useState } from "react";
// import "../css/pokemonsCads.css";

export function usePokeAPI() {
  const [pokeAPI, setPokeAPI] = useState([]);

  useEffect(() => {
    async function fetchNames() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      const data = await response.json();
      setPokeAPI(data.results);
    }

    fetchNames();
  }, []);

  return { pokeAPI };
}

export function usePokemons(name) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    }

    if (name) {
      fetchPokemon();
    }
  }, [name]);

  return { pokemon };
}

