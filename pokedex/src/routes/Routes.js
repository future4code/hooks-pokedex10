import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErroPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";
import PoquedexPage from "../pages/Pokedex/PokedexPage"
import PokemonDetailsPage from "../pages/PokemonDetails/PokemonDetailsPage"

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path='/pokedexpage' element={<PoquedexPage />} />
            <Route path='/pokemondetails' element={<PokemonDetailsPage />} />
            <Route path='*' element={<ErroPage />} />
         </Routes>
      </BrowserRouter>
   )
}