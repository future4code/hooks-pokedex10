import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import Card from "../../components/Card/Card"
import { Grid } from "@chakra-ui/layout"
import { PokedexContainer, PokedexMain, DivDexEmpty } from './styled'
import Vazio from '../../assets/vazio.png'

const PokedexPage = () => {
   const { states } = useContext(GlobalContext)

   const pokedex = states.pokedex

   return (
      <PokedexContainer>
         <Header />
         <PokedexMain>
            {pokedex.length !== 0 ?
               <Grid
                  gap={10}
                  mt={20}
                  px={20}
                  templateColumns="repeat(4, 18rem)"
                  templateRows="auto"
               >
                  {pokedex
                     .sort((a, b) => a.id - b.id)
                     .map((poke) => {
                        return <Card pokeName={poke.name} page={'pokedex'} />
                     })}
               </Grid>
               :
               <DivDexEmpty>
                  <p></p>
                  <img src={Vazio} alt="Imagem por não ter Pokemon na Pokedex" />
               </DivDexEmpty>
            }
         </PokedexMain>
         <Footer />
      </PokedexContainer>
   )
}

export default PokedexPage;