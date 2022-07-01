import React from 'react'
import { goToPokedexPage } from '../../routes/coordinator'


const PokemonDetailsPage = () => {

   return (
      <div>
         <p>Quando o usuário clicar para ver os detalhes de algum Pokemon específico, deve abrir a seguinte página, com as informações do pokemon</p>
         <button onClick={()=>goToPokedexPage} > voltar </button>
      </div>
   )
}


export default PokemonDetailsPage