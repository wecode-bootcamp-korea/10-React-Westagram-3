import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav_JY">
        <div className="navContent">
          <div className="leftLogo">
            <img
              className="textlogo"
              alt=""
              src="/images/JIYUNLEE/logo_text.png"
            />
          </div>
          <div className="middleSearch">
            <input type="search" placeholder="검색" />
          </div>
          <div className="rightMenu">
            <div className="rightMenuBtn">
              <a href="#">
                <img
                  alt=""
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                ></img>
              </a>
              <a href="#">
                <img
                  alt=""
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                ></img>
              </a>
              <a href="#">
                <img
                  alt=""
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                ></img>
              </a>
              <a href="#">
                <img alt="" src="/images/JIYUNLEE/me.jpg" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
