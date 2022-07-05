import ErroImg from "../../assets/errorPage.png"
import { ErroDiv } from "./styled"
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"

const ErroPage = () => {
   return (
      <>
         <Header />
         <ErroDiv imagem={ErroImg} />
         <Footer />
      </>
   )
}

export default ErroPage