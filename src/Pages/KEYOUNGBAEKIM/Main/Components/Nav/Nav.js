import React, { Component } from "react";
import "./Nav.scss";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navContainer">
          <div className="navLogo">
            <img
              className="navLogoImg"
              alt="text logo"
              src="/Images/KEYOUNGBAEKIM/logo_text.png"
            />
          </div>
          <label className="navSearch">
            <div className="searchIconContainer"></div>
            <input
              className="fas searchInput"
              type="text"
              onfocus="focusNavSearch()"
              placeholder="검색"
            />
          </label>
          <div className="navMenuIcon">
            <div className="navIconImg">
              <svg className="menu__svg" viewBox="0 0 48 48">
                <path
                  d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
                  id="a"
                ></path>
                <path
                  d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5z m-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"
                  id="b"
                ></path>
              </svg>
            </div>
            <div className="navIconImg">
              <svg
                aria-label="Direct"
                className="_8-yf5"
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div>
            <div className="navIconImg">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="탐색"
              />
            </div>
            <div className="navIconImg">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
              />
            </div>
            <div className="navIconImg">
              <img
                alt="마이 페이지"
                src="https://instagram.fssa18-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fssa18-1.fna.fbcdn.net&_nc_ohc=VuHrdWdZLhYAX-Pkyf2&oh=0291c0ab19bde77329c8a4f2196b31b7&oe=5F237E8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
