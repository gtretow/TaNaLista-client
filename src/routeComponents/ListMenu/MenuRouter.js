import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";
import MarketList from "../../components/MarketList";
import HistoryMarketList from "../../components/HistoryMarketList";

// compente Navbar
// componente "/menus/list" vai renderizar o criador de lista => search, autocomplete, tabelas com os itens selecionados
// componente "/menus/history" vai renderizar o histórico de listas do usuário

function MenuRouter() {
  return (
    <React.Fragment>
      <Navbar className="pb-4" />
      <div className=" mt-4 pt-3 d-flex justify-content-center ">
        <Switch>
          <Route exact path="/menus/list" component={MarketList} />
          <Route exact path="/menus/history" component={HistoryMarketList} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default MenuRouter;
