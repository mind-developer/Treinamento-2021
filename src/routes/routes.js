import Login from "../screens/Login/Login";
import Cadastro from "../screens/cadastro";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
        <Route
          path={`${process.env.PUBLIC_URL}/cadastro`}
          component={Cadastro}
        />
      </Switch>
    </BrowserRouter>
  );
}
