import { useParams } from "react-router-dom";
import { usePokemons } from "../services/pokemons";
import "../css/pokeCards.css";

export function PokeCards() {
  const { name } = useParams();
  const { pokemon } = usePokemons(name);
  const { types, abilities, stats } = pokemon;

  return (
    <div className="pokeCard">
      {pokemon && pokemon.sprites ? (
        <div className="pokeCard-container">
          <h2 className="pokeCard-title">{name}</h2>
          <img
            className="pokeCard-img"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <p>Experiencia base: {pokemon.base_experience}</p>
          <p>Type: {types.map((type) => type.type.name).join(", ")}</p>
          <p>Abilities:{" "}{abilities.map((ability) => ability.ability.name).join(", ")}</p>
          <p>HP: {stats.find((stat) => stat.stat.name === "hp").base_stat}</p>
          <p>Attack:{" "}{stats.find((stat) => stat.stat.name === "attack").base_stat}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
