import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import cadastro from "./screens/cadastro";
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cadastro" component={cadastro}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
