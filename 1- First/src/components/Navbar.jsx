import { NavLink } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            // className={({ isActive }) => (isActive ? "active" : "blue")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={}
            to="/pokemons"
          >
            Pokemons
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;
