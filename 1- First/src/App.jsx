import { PokeCards } from "./pages/PokeAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokeCards/>}/>
        <Route path='/about' element={<div>Im about</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
