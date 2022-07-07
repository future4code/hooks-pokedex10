import React, { useEffect, useState } from 'react'
import { goToPokedexPage } from '../../routes/coordinator'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { ContainerMoves, ContainerType, PageDetailsContainer } from './styled'


const PokemonDetailsPage = () => {

   const [detailsPokemon,setDetailsPokemon] = useState ([])
   const {idDoPokemon} = useParams ()

   useEffect(()=>{
      axios
      .get (`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`)
      .then ((resp)=>setDetailsPokemon(resp.data))
      console.log (detailsPokemon)
      
   },[])


   const renderPokemonStats = detailsPokemon.stats && detailsPokemon.stats.map((stat,)=>{
      return <div>
         <p>{stat.stat.name}</p>
         <p>{stat.base_stat}</p>

      </div>
   })

   const renderPokemonMoves = detailsPokemon.moves && detailsPokemon.moves.map((move)=>{
      return <div>{move.move.name}</div>
   })

   const renderPokemonType = detailsPokemon.type && detailsPokemon.type.map ((type)=>{
      return <div>
         <p>{type.type.name}</p>
      </div>
   })

//   const renderImagPoke = detailsPokemon.name && detailsPokemon.name.map ((name)=>{
//    return <div>
//       <p>{name.name}</p>
//    </div>
//   })

   return (
      <div>
         <PageDetailsContainer>
            {idDoPokemon}
            <p>Quando o usuário clicar para ver os detalhes de algum Pokemon específico, deve abrir a seguinte página, com as informações do pokemon</p>
            <button onClick={()=>goToPokedexPage} > voltar </button>
            <>{renderPokemonStats}</> 

            <ContainerMoves>
               {renderPokemonMoves}
            </ContainerMoves>

            <ContainerType>        
               {renderPokemonType}
            </ContainerType>
         </PageDetailsContainer>
      </div>
   )
}


export default PokemonDetailsPage