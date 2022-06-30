import { Router } from "./routes/Routes"
import { GlobalStyle } from "./AppStyled"
import Footer from "../src/components/Footer/Footer"
import Header from "../src/components/Header/Header"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
