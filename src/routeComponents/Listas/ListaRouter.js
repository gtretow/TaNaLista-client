import React from "react";
import { Route, Switch } from "react-router-dom";

import ListaUpdate from "./ListaUpdate";
import ListaDelete from "./ListaDelete";
import MarketList from "../../components/MarketList";
import HistoryMarketList from "./HistoryMarketList";
import Navbarmain from "../../components/Navbar";
import About from "../../components/About";
import Conta from "../../components/Profile";
import PrivateRoute from "../../routeComponents/auth/PrivateRoute";

function ListaRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Navbarmain />
      <div className="container-fluid">
        <Switch>
          <PrivateRoute
            exact
            path={`${props.match.path}/`}
            component={HistoryMarketList}
          />
          <Route exact path={`${props.match.path}/about`} component={About} />
          <PrivateRoute
            exact
            path={`${props.match.path}/conta`}
            component={Conta}
          />
          <PrivateRoute
            path={`${props.match.path}/lista`}
            component={MarketList}
          />
          <PrivateRoute
            path={`${props.match.path}/listas-salvas`}
            component={HistoryMarketList}
          />
          <PrivateRoute
            exact
            path={`${props.match.path}/delete/:id`}
            component={ListaDelete}
          />
          <PrivateRoute
            path={`${props.match.path}/:id`}
            component={ListaUpdate}
          />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default ListaRouter;
