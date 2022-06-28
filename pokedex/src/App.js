import { Router } from "./routes/Routes";
import { GlobalStyle } from "./AppStyled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
