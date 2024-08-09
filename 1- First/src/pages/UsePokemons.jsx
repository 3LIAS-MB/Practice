import { useEffect, useState } from "react";

function useNames() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchNames() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setNames(data.results);
    }

    fetchNames();
  }, []);

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setPokemons(response);
  //     });
  // }, [name]);

  return names;
}

function usePokemons(name) {
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

  return pokemon;
}

export function Pokemons() {
  const names = useNames();
  const [selectedName, setSelectedName] = useState(null);
  const pokemon = usePokemons(selectedName);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {names.map((poke) => (
          <li key={poke.name} onClick={() => setSelectedName(poke.name)}>
            {poke.name}
          </li>
        ))}
      </ul>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
      )}
    </div>
  );
}
