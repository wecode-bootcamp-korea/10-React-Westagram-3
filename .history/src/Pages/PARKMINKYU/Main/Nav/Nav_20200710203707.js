import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav class="Nav_MK">
        <div className="nav-bar">
          <div className="nav-concent">
            <div className="l-nav">
              <img className="logo-insta" src="images/logo_text.png" />
            </div>
            <div className="search-bar">
              <input className="nav-input" type="text" placeholder="검색" />
            </div>
            <div className="r-nav">
              <div className="r-nav-icon">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
