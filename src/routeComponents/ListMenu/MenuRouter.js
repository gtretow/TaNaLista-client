import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";
import MarketList from "../../components/MarketList";
import HistoryMarketList from "../../components/HistoryMarketList";
import About from "../../components/About";

function MenuRouter() {
  return (
    <div className="menus">
      <div className="menusEscolha">
        <div className="navBar">
          <Link to="/">para /</Link>
          <Navbar />
        </div>
        <Switch>
          <Route path="/menus/list" component={MarketList} />
          <Route path="/menus/history" component={HistoryMarketList} />
        </Switch>{" "}
      </div>
      <About />
    </div>
  );
}

export default MenuRouter;
