import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feed/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="main">
          <div className="mainContainer">
            <Feeds />
            <MainRight />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
