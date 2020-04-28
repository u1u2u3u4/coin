import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Coins from "../routes/Coins/Coins";
import Coin from "../routes/Coin/Coin";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Coins} />
        <Route exact path="/:id" component={Coin} />
      </Switch>
    </Router>
  );
}

export default Routes;
