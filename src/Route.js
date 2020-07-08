import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jiyunMain from "./Pages/JIYUNLEE/Main/Main";
import jiyunLogin from "./Pages/JIYUNLEE/Login/Login";
import keyoungbaeMain from "./Pages/KEYOUNGBAEKIM/Main/Main";
import keyoungbaeLogin from "./Pages/KEYOUNGBAEKIM/Login/Login";
import taesungMain from "./Pages/TAESUNGLEE/Main/Main";
import taesungLogin from "./Pages/TAESUNGLEE/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={jiyunLogin} />
          <Route exact path="/main" component={jiyunMain} />
          <Route exact path="/" component={keyoungbaeLogin} />
          <Route exact path="/main" component={keyoungbaeMain} />
          <Route exact path="/" component={taesungLogin} />
          <Route exact path="/main" component={taesungMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
