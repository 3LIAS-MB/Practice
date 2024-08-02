import { useParams } from "react-router-dom";

export function UsePokeCards() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default UsePokeCards;
