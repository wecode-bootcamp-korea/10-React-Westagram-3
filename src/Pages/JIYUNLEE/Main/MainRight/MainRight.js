import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div>
        <div className="mainRight">
          <div className="fixRight">
            <div className="rightProfile">
              <img className="rightProfile-pic" src="/images/JIYUNLEE/me.jpg" />
              <p>
                <strong>limosum91</strong>
              </p>
            </div>
            <div className="recommend">
              <div className="recommendTitle">
                <span>회원님을 위한 추천</span>
                <input type="button" value="모두 보기" />
                <br></br>
              </div>
              <div className="recommendList">
                <div className="recommendProfile">
                  <img src="/images/JIYUNLEE/tom.jpg" />
                  <div className="userText">
                    <p className="userid">tomholland2013</p>
                    <p className="secondLine">robertdowneyjr 님 외 1명이...</p>
                  </div>
                  <input className="follow" type="button" value="팔로우" />
                  <br></br>
                </div>
                <div className="recommendProfile">
                  <img src="/images/JIYUNLEE/robert.jpg" />
                  <div className="userText">
                    <p className="userid">robertdowneyjr</p>
                    <p className="secondLine">tomholland2013 님 외 4명이...</p>
                  </div>
                  <input className="follow" type="button" value="팔로우" />
                  <br></br>
                </div>
                <div className="recommendProfile">
                  <img src="/images/JIYUNLEE/marvel.jpg" />
                  <div className="userText">
                    <p className="userid">marvel</p>
                    <p className="secondLine">tomholland2013 님 외 2명이...</p>
                  </div>
                  <input className="follow" type="button" value="팔로우" />
                  <br></br>
                </div>
                <div className="recommendProfile">
                  <img src="/images/JIYUNLEE/avengers.jpg" />
                  <div className="userText">
                    <p className="userid">avengers</p>
                    <p className="secondLine">tomholland2013 님 외 1명이...</p>
                  </div>
                  <input className="follow" type="button" value="팔로우" />
                  <br></br>
                </div>
              </div>
            </div>
            <div className="source">
              <p className="sitemap">
                소개 ∙ 도움말홍보 ∙ 센터 ∙ API ∙ 채용 ∙ 정보 ∙
                개인정보처리방침약관 ∙ 위치 ∙ 인기 계정 ∙ 해시태그 ∙ 언어
              </p>
              <p className="instagram">© 2020 INSTAGRAM FROM FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainRight;
