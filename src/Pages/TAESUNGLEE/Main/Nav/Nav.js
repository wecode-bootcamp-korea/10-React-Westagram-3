import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="navContainer">
          <div className="leftLogo">
            <div>
              <img
                className="instarIcon"
                alt="instaricon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              />
            </div>
            <div className="wall"></div>
            <div>
              <img
                className="instarLogo"
                alt="instarlogo"
                src="/images/LEETAESUNG/logo_text.png"
              />
            </div>
          </div>
          <div>
            <input className="searchBox" type="text" placeholder="검색" />
          </div>
          <div className="rightLogo">
            <div>
              <img
                className="tripleLogo"
                alt="explore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </div>
            <div>
              <img
                className="tripleLogo"
                alt="activity"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </div>
            <div>
              <img
                className="tripleLogo"
                alt="account"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
