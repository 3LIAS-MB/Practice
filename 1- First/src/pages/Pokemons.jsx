import PropTypes from "prop-types";

import { usePokeAPI, usePokemons } from "../services/pokemons";
import { useNavigate } from "react-router-dom";
import "../css/pokemonsCards.css";

export function PokeImage({ pokemones }) {
  const { pokemon } = usePokemons(pokemones.name);

  return (
    <>
      {pokemon && pokemon.sprites ? (
        <img
          className="pokeImage"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemones.name}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export function Pokemons() {
  const { pokeAPI } = usePokeAPI();
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <>
      <section className="pokemon-section">
        <div className="pokemon-logo">
          <img
            className="pokemon-logo-img"
            src="../../public/logo.png"
            alt="logo pokemon"
          />
        </div>
        <div className="pokemon-search">
          <input className="pokemon-search-input" type="text" />
        </div>
        <div className="pokemon-grid">
          {pokeAPI.map((pokemon, index) => (
            <div
              key={index}
              className="pokemon-card"
              onClick={() => {
                handleClick(pokemon.name);
              }}
            >
              <h3>
                {pokemon.name} {index}
              </h3>
              <PokeImage pokemones={pokemon} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

PokeImage.propTypes = {
  pokemones: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
