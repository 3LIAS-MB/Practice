// useLocation nos da la informacion actual en donde estamos
import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/AuthContex";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth();

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">PERN task</h1>
        </Link>

        <ul className="flex gap-x-2">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name }) => (
                <li
                  className={`text-slate-300 ${
                    location.pathname === path && "bg-sky-500 px-3 py-1"
                  }`}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}

              <li
                onClick={() => {
                  signout();
                }}
              >
                Logout
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={`text-slate-300 ${
                  location.pathname === path && "bg-sky-500 px-3 py-1"
                }`}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
