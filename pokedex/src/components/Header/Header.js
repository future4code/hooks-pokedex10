import React from 'react'
import { HeaderDiv, DivLogoHome, DivDex, ButtonOne, ButtonTwo, Img } from "./styled"
import LogoDex from "../../assets/logoDex.png"
import Pokedex from "../../assets/pokedex.png"




const Header = (props) => {

   return (
      <>

         <HeaderDiv>
            <DivLogoHome>
               <ButtonOne>
                  <Img src={LogoDex} alt="Botão para página inicial" />
               </ButtonOne>
            </DivLogoHome>

            <DivDex>
               <ButtonTwo >
                  <Img src={Pokedex} alt="Botão para página de Pokédex" />
               </ButtonTwo>
            </DivDex>
         </HeaderDiv>

      </>
   )
}


export default Header