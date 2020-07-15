import React, { Component } from "react";
import Nav from "./Nav/Nav";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";
import Feeds from "./Feeds/Feeds";

class Main extends Component {
  componentDidMount() {
    if (!localStorage.getItem("access_token")) {
      alert("로그인 먼저 해주세요");
      this.props.history.push("/jiyunLogin");
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="Main_JY">
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
