import React from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main_MK">
        <Nav />
        <main>
          <div className="main-content">
            <div className="feeds">
              <Article />
              <MainRight />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
