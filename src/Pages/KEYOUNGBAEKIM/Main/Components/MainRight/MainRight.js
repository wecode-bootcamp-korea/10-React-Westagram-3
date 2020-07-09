import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="MainRight">
        <aside className="asideFixed">
          <div className="profileRow">
            <div className="imgRound">
              <img
                className="profileImg"
                alt="profileImage"
                src="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=DIgFI0CojBoAX8ktimW&oh=b6b9709dc6b44c69d7c4cfb6ca38d9c7&oe=5F27730F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
              />
            </div>
            <div className="profileColumn">
              <p className="profileNickname">rudqo_723</p>
              <p className="profileNickname">김경배</p>
            </div>
          </div>
          <div className="recommendationContainer">
            <p className="recommendationTitle">회원님을 위한 추천</p>
            <p className="recommendationViewAll">모두 보기</p>
          </div>
          <div className="followContainer">
            <div className="followMemberContainer">
              <div className="roundImg">
                <img
                  alt="byunginsta님의 프로필 사진"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/27574121_174383499843652_3342958743682809856_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=v8nsX3ASsykAX_5eOts&amp;oh=97bfb51ed5ae073125af406a01187363&amp;oe=5F23D84A"
                />
              </div>
              <div className="followMemberName">
                <p>byunginsta</p>
                <p className="grayText">회원님을 팔로우합니다</p>
              </div>
              <div className="followBtnContainer">
                <button className="followBtn">팔로우</button>
              </div>
            </div>
            <div className="followMemberContainer">
              <div className="roundImg">
                <img
                  alt="hy_jmj님의 프로필 사진"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29738812_782249245298923_5274794755220307968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=mUZbJVAuqTAAX8gLELC&amp;oh=52e17e14b99c03684ddc0783cc9781bc&amp;oe=5F23CE9D"
                />
              </div>
              <div className="followMemberName">
                <p>hy_jmj</p>
                <p className="grayText">회원님을 팔로우합니다</p>
              </div>
              <div className="followBtnContainer">
                <button className="followBtn">팔로우</button>
              </div>
            </div>
            <div className="followMemberContainer">
              <div className="roundImg">
                <img
                  alt="yongbum_93님의 프로필 사진"
                  className="_6q-tv"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/84419607_1079291175752528_2997473120580796416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=S664Mm7-ALgAX-GZjjh&amp;oh=eb98edeef9021b8941b061c7875fbb53&amp;oe=5F250309"
                />
              </div>
              <div className="followMemberName">
                <p>yongbum_93</p>
                <p className="grayText">회원님을 팔로우합니다</p>
              </div>
              <div className="followBtnContainer">
                <button className="followBtn">팔로우</button>
              </div>
            </div>
          </div>
          <div className="followMemberName">
            <p className="grayText">소개 도움말 홍보 센터 API 채용 정보</p>
            <p className="grayText">
              개인정보처리방침 약관 위치 인기 계정 해시태그 언어
            </p>
            <br />
            <p className="grayText">© 2020 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </aside>
      </div>
    );
  }
}

export default MainRight;
