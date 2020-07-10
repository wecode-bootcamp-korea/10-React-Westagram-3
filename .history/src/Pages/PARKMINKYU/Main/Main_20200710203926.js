import React from "react";
import Nav from "../../Component/Nav/Nav";
import Article from "../../Component/Article/Article";
import MainRight from "../../Component/MainRight/MainRight";
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
