import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'


const PokedexPage = () => {

   const navigate = useNavigate()

   return (
      <div>
         <p>A página da Pokedex do usuário será bem parecida com a página inicial. A diferença é que a lista de Pokemons que será renderizada na tela não virá diretamente da API, mas sim dos Pokemons previamente selecionados pelo próprio usuário.</p>
         <button onClick={()=>goToHomePage(navigate)} > Voltar para minha lista de Pokemons </button>
      </div>
   )
}


export default PokedexPage