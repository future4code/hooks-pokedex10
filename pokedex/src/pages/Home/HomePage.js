import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokedexPage } from '../../routes/coordinator';


const HomePage = () => {

   const navigate = useNavigate()

   return (
      <div>
         <p>Essa é a página inicial do site. Ela é responsável por mostrar a lista de Pokemons ao usuário.</p>
         <button onClick={()=>goToPokedexPage(navigate)} > Ver Minha POKEDEX </button>
      </div>
   )
}


export default HomePage