import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/home";
import christmasTheme from "./theme/christmas";
import "../src/fonts/fonts.css";

function App() {
  return (
    <ThemeProvider theme={christmasTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
