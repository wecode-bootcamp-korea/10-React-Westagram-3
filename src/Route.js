import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jiyunMain from "./Pages/JIYUNLEE/Main/Main";
import jiyunLogin from "./Pages/JIYUNLEE/Login/Login";
import keyoungbaeMain from "./Pages/KEYOUNGBAEKIM/Main/Main";
import keyoungbaeLogin from "./Pages/KEYOUNGBAEKIM/Login/Login";
import taesungMain from "./Pages/TAESUNGLEE/Main/Main";
import taesungLogin from "./Pages/TAESUNGLEE/Login/Login";
import parkminkyuMain from "./Pages/PARKMINKYU/Main/Main";
import parkminkyuLogin from "./Pages/PARKMINKYU/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/jiyunLogin" component={jiyunLogin} />
          <Route exact path="/jiyunMain" component={jiyunMain} />
          <Route exact path="/keyoungbaeLogin" component={keyoungbaeLogin} />
          <Route exact path="/keyoungbaeMain" component={keyoungbaeMain} />
          <Route exact path="/taesungLogin" component={taesungLogin} />
          <Route exact path="/taesungMain" component={taesungMain} />
          <Route exact path="/parkminkyuLogin" component={parkminkyuLogin} />
          <Route exact path="/parkminkyuMain" component={parkminkyuMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
