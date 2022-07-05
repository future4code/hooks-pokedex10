import React from 'react'
import { HeaderDiv, DivLogoHome, DivDex, Button, ButtonOne, ButtonTwo, Img, DivLogoOthers } from "./styled"
import LogoDex from "../../assets/logoDex.png"
import Pokedex from "../../assets/pokedex.png"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToPokedexPage, goBack } from "../../routes/coordinator"
import { TiArrowBack } from "react-icons/ti"
import { Tooltip } from '@chakra-ui/react'

const Header = (props) => {

   const navigate = useNavigate()

   return (
      <>
         {
            // caso esteja na página Home 
            props.page === 'home' ?
               <HeaderDiv>
                  <DivLogoHome>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                        <ButtonOne onClick={() => goToHomePage(navigate)}>
                           <Img src={LogoDex} alt="Botão para página inicial" />
                        </ButtonOne>
                     </Tooltip>
                  </DivLogoHome>

                  <DivDex>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                        <ButtonTwo onClick={() => goToPokedexPage(navigate)}>
                           <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </ButtonTwo>
                     </Tooltip>
                  </DivDex>
               </HeaderDiv>
               :
               // caso esteja exibindo outra página
               <HeaderDiv>
                  {/* seta para retorna  */}
                  <Tooltip hasArrow bg='gray.400' color={'black'} label='Voltar' placement='top-end'>
                     <Button onClick={() => goBack(navigate)}>
                        <TiArrowBack
                           size={50}
                           color={'#E41C24'}
                           style={{ position: "absolute", top: "14px" }}
                        />
                     </Button>
                  </Tooltip>

                  <DivLogoOthers>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                        <ButtonOne onClick={() => goToHomePage(navigate)}>
                           <Img src={LogoDex} alt="Botão para página inicial" />
                        </ButtonOne>
                     </Tooltip>
                  </DivLogoOthers>

                  <DivDex>
                     <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                        <ButtonTwo onClick={() => goToPokedexPage(navigate)}>
                           <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </ButtonTwo>
                     </Tooltip>
                  </DivDex>
               </HeaderDiv>
         }

      </>
   )
}


export default Header