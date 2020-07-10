import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feed/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="Main_TS">
          <div className="mainContainer">
            <Feeds />
            <MainRight />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
