import React, { useEffect, useState } from 'react'
import { goToPokedexPage } from '../../routes/coordinator'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { ContainerMoves, ContainerStats, ContainerType, HeaderDetails, PageDetailsContainer, ScreenImg, ContainerMain } from './styled'


const PokemonDetailsPage = () => {

   const [detailsPokemon,setDetailsPokemon] = useState ([])
   const {idDoPokemon} = useParams ()

   useEffect(()=>{
      axios
      .get (`https://pokeapi.co/api/v2/pokemon/${idDoPokemon}`)
      .then ((resp)=>setDetailsPokemon(resp.data))
            
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
   return (
      <div>
         <PageDetailsContainer>
               <HeaderDetails>
                  {idDoPokemon}
                  {detailsPokemon && detailsPokemon.sprites && (<div>
                        <img src={detailsPokemon.sprites.versions["generation-ii"].crystal.front_default}/>                  
                  </div>) }
                  <button onClick={()=>goToPokedexPage} > voltar </button>
               </HeaderDetails>

            <ContainerMain>        

                  <ContainerStats>
                     <h2>Estatísticas</h2>
                     {renderPokemonStats}
                  </ContainerStats> 


               <ScreenImg>
               {detailsPokemon && detailsPokemon.sprites && (<div>
                     <img src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
                     <img src={detailsPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>

               </div>) }
               </ScreenImg>
               
               
                        <ContainerMoves>
                  <h2>Movimentos</h2>
                  {renderPokemonMoves}
               </ContainerMoves>

               <ContainerType>        
                  {renderPokemonType}
               </ContainerType>
               
             </ContainerMain> 
        

            </PageDetailsContainer>
      </div>
   )
}


export default PokemonDetailsPage