import { Pokemons } from "./pages/UsePokemons.jsxI";
import { UsePokeCards } from './pages/UsePokeCards.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"

function App() {



  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pokemons/>}/>
        <Route path='/pokemons/:id' element={<UsePokeCards/>}/>
        {/* <Route path="*" element={<NotFoundPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
