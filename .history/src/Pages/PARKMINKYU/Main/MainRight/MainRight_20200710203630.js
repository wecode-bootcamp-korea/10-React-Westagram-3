import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
  render() {
    return (
      <div className="MainRight_MK">
        <div className="main-right-fixed">
          {" "}
          {/*메인 라이트 픽스*/}
          <div className="main-right-info">
            <img
              className="main-right-profile"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
            />
            <ul className="main-right-profile-info">
              <li>
                <b>7p3m1k</b>
              </li>
              <li className="main-right-font-color">박민규</li>
            </ul>
          </div>
          <div className="main-right-box">
            <div className="recommend">
              <span className="main-right-box-font-color">
                회원님을 위한 추천
              </span>
              <span className="main-right-all-view-size">모두 보기</span>
            </div>
            <div className="recommend-list">
              <div className="list">
                <div className="list1">
                  <img
                    className="list-img"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                  />
                  <ul className="list-name">
                    <li>
                      <b>gogoWecode</b>
                    </li>
                    <li className="main-right-box-font-color">
                      instagram 신규가입
                    </li>
                  </ul>
                  <span className="follow">팔로우</span>
                </div>
                <div className="list1">
                  <img
                    className="list-img"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                  />
                  <ul className="list-name">
                    <li>
                      <b>7m_31k</b>
                    </li>
                    <li className="main-right-box-font-color">facebook 친구</li>
                  </ul>
                  <span className="follow">팔로우</span>
                </div>
                <div className="list1">
                  <img
                    className="list-img"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                  />
                  <ul className="list-name">
                    <li>
                      <b>hi_hellow</b>
                    </li>
                    <li className="main-right-box-font-color">
                      instagram 신규가입
                    </li>
                  </ul>
                  <span className="follow">팔로우</span>
                </div>
                <div className="list1">
                  <img
                    className="list-img"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                  />
                  <ul className="list-name">
                    <li>
                      <b>code_jjang</b>
                    </li>
                    <li className="main-right-box-font-color">facebook 친구</li>
                  </ul>
                  <span className="follow">팔로우</span>
                </div>
                <div className="list1">
                  <img
                    className="list-img"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                  />
                  <ul className="list-name">
                    <li>
                      <b>T,.T</b>
                    </li>
                    <li className="main-right-box-font-color">
                      ins님 외 9명이 팔로우합니다
                    </li>
                  </ul>
                  <span className="follow">팔로우</span>
                </div>
              </div>
            </div>
            <div className="main-right-end">
              <div className="insta-info">
                <ul className="li-11">
                  <li>소개</li>
                  <li>도움말</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>위치</li>
                  <li>인기 계정</li>
                  <li>해시태그</li>
                  <li>언어</li>
                </ul>
                <span className="end">© 2020 INSTAGRAM FROM FACEBOOK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;
