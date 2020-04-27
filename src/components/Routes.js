import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Coins from "../routes/Coins/Coins";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Coins} />
      </Switch>
    </Router>
  );
}

export default Routes;
