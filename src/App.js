import { Route } from "react-router-dom";
//Components
import Home from "./pages/home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
