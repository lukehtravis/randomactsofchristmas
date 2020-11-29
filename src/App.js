import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/home";
import Map from "./components/map";
import Mission from "./components/mission";
import christmasTheme from "./theme/christmas";
import "../src/fonts/fonts.css";

function App() {
  return (
    <ThemeProvider theme={christmasTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/mission" component={Mission} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
