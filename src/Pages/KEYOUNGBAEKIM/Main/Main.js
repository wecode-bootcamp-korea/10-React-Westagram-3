import React, { Component } from "react";
import "./Main.scss";
import Nav from "./Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";
import MainRight from "./Components/MainRight/MainRight";

class Main extends Component {
  render() {
    return (
      <div className="Main_KB">
        <Nav />
        <main>
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
