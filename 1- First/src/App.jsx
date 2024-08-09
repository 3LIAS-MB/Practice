import { Pokemons } from "./pages/UsePokemons.jsx";
import { UsePokeCards } from './pages/UsePokeCards.jsx'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"

function App() {



  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/pokemons/:id' element={<UsePokeCards/>}/>
        {/* <Route path="*" element={<NotFoundPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
