import { useEffect, useState } from "react";

function useName() {
  const [pokeName, setPokeName] = useState();

  useEffect(() => {
    async function nameFetch() {
      const promise = await fetch("https://pokeapi.co/api/v2/pokemon");
      const names = promise.json();
      setPokeName(names.results);
    }

    nameFetch();
  }, [pokeName]);

  return { pokeName };
}

function UsePokemons() {
  const {  }
  const { pokeName } = useName();

  useEffect(() => {
    async function fetchPokemons() {
      const promise = fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName.name}`
      );
      const pokemons = promise.json();
      return pokemons;
    }

    const pokemons = fetchPokemons()
    return pokemons
  });

  return <div></div>;
}

function pokemons() {}
