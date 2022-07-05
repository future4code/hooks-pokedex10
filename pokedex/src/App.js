import { Router } from "./routes/Routes"
import { GlobalStyle } from "./AppStyled"
//import theme from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from "./global/GlobalState"

function App() {
  return (
    <GlobalState>
      <ChakraProvider >
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
