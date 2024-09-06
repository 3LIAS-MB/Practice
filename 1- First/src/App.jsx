import { Pokemons } from "./pages/Pokemons.jsx";
import { PokeCards } from './pages/PokeCards.jsx'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"

function App() {

  // este es un comentario para decirte que sos un pajero
  // SOS RE PAJERO 

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/pokemons/:name' element={<PokeCards/>}/>
      </Routes>
    </Router>
  );
}

export default App;
