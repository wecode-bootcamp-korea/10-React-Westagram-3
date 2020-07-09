import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <div className="mainContent">
          <Feeds />
          <MainRight />
        </div>
      </div>
    );
  }
}
export default Main;
