import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErroPage from "../pages/Erro/ErroPage";

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='*' element={<ErroPage />} />
         </Routes>
      </BrowserRouter>
   )
}