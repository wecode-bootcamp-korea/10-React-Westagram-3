import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="MainRight">
        <div className="flex myAccount">
          <div className="myAccountImgBox">
            <img
              className="myAccountImg"
              alt="myprofile"
              src="/images/LEETAESUNG/background.jpg"
            />
          </div>
          <div className="flex myAccountExplain">
            <div>
              <span className="font">yotae07</span>
            </div>
            <div>
              <span className="mainSubFont">이태성</span>
            </div>
          </div>
        </div>
        <div className="recommand">
          <div className="recommandBox">
            <div>
              <span className="mainFont mainBold">회원님을 위한 추천</span>
            </div>
            <div>
              <span className="subFont subBold">모두 보기</span>
            </div>
          </div>
          <div>
            <div className="flex recommandAccountBox">
              <div className="recommandImgBox">
                <img
                  className="recommandImg"
                  alt="프로필사진"
                  src="/images/LEETAESUNG/default.png"
                />
              </div>
              <div className="flex recommandAccount">
                <div className="flex recommandAccountExplain">
                  <div>
                    <span className="font">아이디</span>
                  </div>
                  <div>
                    <span className="mainSubFont">회원님을 팔로우합니다</span>
                  </div>
                </div>
                <div className="flex follow">
                  <span className="followButton">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;
