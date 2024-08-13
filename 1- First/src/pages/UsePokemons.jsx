// import { useState } from "react";
import { usePokeAPI } from "../services/pokemons";

export function Pokemons() {
  // const [selectedName, setSelectedName] = useState();
  // const { pokemon } = usePokemons(selectedName);
  
  const { pokeAPI } = usePokeAPI();
  // const { names } = useNames()

  // console.log('KAKAKAKAK')
  // console.log(names)

  return (
    // <div>
    //   <h1>Pokemón</h1>
    //   <ul>
    //     {pokeAPI.map((poke) => (
    //       <li key={poke.name} onClick={() => setSelectedName(poke.name)}>
    //         {poke.name}
    //       </li>
    //     ))}
    //   </ul>
    //   {pokemon && (
    //     <div>
    //       <h2>{pokemon.name}</h2>
    //       <img
    //         src={pokemon.sprites.other["official-artwork"].front_default}
    //         alt={pokemon.name}
    //       />
    //     </div>
    //   )}
    // </div>
    <>
      <h1>Pokémones</h1>
      {pokeAPI.map((pokemones, index) => (
        <div key={index}>
          <h1>{pokemones.name} {index}</h1>
          <p>{pokemones.url}</p>
          <p>{pokemones[index].name}</p>
          {/* <img src={pokemones[index].name}/> */}
        </div>
      ))}

    </>
  );
}
