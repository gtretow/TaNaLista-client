import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";
import MarketList from "../../components/MarketList";
import HistoryMarketList from "../../components/HistoryMarketList";

function MenuRouter() {
  return (
    <div>
      <div className="pb-4">
        <Navbar />
      </div>

      <div className=" mt-4 pt-3 d-flex justify-content-center ">
        <Switch>
          <Route exact path="/menus/list" component={MarketList} />

          <Route exact path="/menus/history" component={HistoryMarketList} />
        </Switch>
      </div>
    </div>
  );
}

export default MenuRouter;
