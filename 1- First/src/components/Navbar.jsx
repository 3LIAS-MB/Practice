import { Outlet, NavLink } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "blue")}
            to="/"
          >
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
