import Login from "../screens/Login/Login";
import Cadastro from "../screens/cadastro";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../screens/home/Home";
import Profile from "../screens/Profile/Profile";
export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/cadastro`}
          component={Cadastro}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/perfil`}
          component={Profile}
        />
      </Switch>
    </BrowserRouter>
  );
}
