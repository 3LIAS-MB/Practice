import { useEffect, useState } from "react";

function usePokemons() {
    const [pokemons, setPokemons] = useState({});
  
    // useEffect(() => {
    //   async function fetchPokemon() {
    //     const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon')
    //     const data = await pokemons.json()
    //     setPokemons(data.results)
    //   }
  
    //   fetchPokemon()
    // }, [])
  
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((response) => {
          setPokemons(response); 
        });
    }, []);
  
    return { pokemons };
  }

export function Pokemons() {
    const { pokemons } = usePokemons();
    // console.log('XDXDXDXDXDXD')
    // console.log(pokemons.url)
    console.log()
    
    return (
      <>
        <h2>HOLA MUNDO</h2>
        <img src={pokemons} alt={pokemons.name} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      </>
    );
  }