import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './screens/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
