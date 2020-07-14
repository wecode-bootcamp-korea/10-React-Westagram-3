import React from "react";
import "./Feeds.scss";

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      myName: "위코드",
      newReply: "",
      replies: [
        {
          author: "엘비",
          text: "hihi",
        },
        {
          author: "민귤",
          text: "어려워",
        },
        {
          author: "너드",
          text: "쉬워",
        },
      ],
    };
  }

  textChange = (event) => {
    // input 요소의 onChange 이벤트 핸들러
    this.setState({
      newReply: event.target.value,
    });
  };

  add = () => {
    // Button 요소의 onClick 이벤트 핸들러
    let arr = this.state.replies;
    arr.push({
      author: this.state.myName,
      text: this.state.newReply,
    });

    this.setState({
      replies: arr,
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.add();
    }
  };

  render() {
    return (
      <div className="Feeds_MK">
        <div className="profile-box">
          <ul className="profile-box-ul">
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
                alt="7p3m1k"
              />
              <p className="profile-box-name">7p3m1k</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/42852301_484224762077664_8230837972723826688_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=KtbOQeB5K5cAX82JjGY&oh=7eca23e0dbcced6128dbb6aaeb5f4409&oe=5F2BE315"
                alt="damissoul"
              />
              <p className="profile-box-name">damissoul</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/102648329_307084983650748_3125008933148250477_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yDhLnU9Wx3QAX9RG4M-&oh=363b2b52f5db1ceff63229a68b706fab&oe=5F2B3A13"
                alt="je.ony"
              />
              <p className="profile-box-name">je.ony</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43478881_696087044109861_43720430611070976_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=VrtRKJ7PhyAAX8K58LY&oh=fd71f36adcb0893805c27c105ba9747e&oe=5F29225A"
                alt="allbyryu"
              />
              <p className="profile-box-name">allbyryu</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/21435816_118264495504759_2648679517962371072_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=eakSBzgEyvcAX-b5-H6&oh=5579995aef2fd32a283dd465d1e7fce5&oe=5F2C300B"
                alt="blueonback"
              />
              <p className="profile-box-name">blueonback</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/60751590_688401631618926_1318321545579331584_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=teucY8yqBSUAX-YyO7h&oh=ced2bb9c59d8676d8b6d7b17dfeb32ac&oe=5F2C20C7"
                alt="hwxxk"
              />
              <p className="profile-box-name">hwxxk</p>
            </li>
            <li className="profile-box-li">
              <img
                className="profile-box-pic"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/87817381_214981706553231_5604676693416476672_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ZQU9N0btUTkAX_JK2n7&oh=9a04c901175c5d5bb4289df2e0b0a682&oe=5F2C9C7D"
                alt="wavy_u_wh..."
              />
              <p className="profile-box-name">wavy_u_wh...</p>
            </li>
          </ul>
        </div>
        <header className="feeds-top">
          <div className="fedds-top-profile">
            <img
              className="feeds-profile"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82539826_847131005730479_3700718348229672960_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N91GmeanSlcAX8WlhoH&oh=b0de0efa4e1162b7b7de7ca3b7c6a9ff&oe=5F2A675D"
              alt="7p3m1k"
            />
          </div>
          <div className="feeds-top-name-dot">
            <div>
              <p>
                <b>7p3m1k</b>
              </p>
            </div>
            <div className="dot-box">
              <img
                className="dot"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt="dotx3"
              />
            </div>
          </div>
        </header>
        <div className="big-img">
          <img className="big-in-img" src="images/PARKMINKYU/maingom.jpeg" />
        </div>
        <div className="feeds-bottom">
          <div className="feeds-bottom-icons">
            <span className="feeds-bottom-icon">
              <img
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </span>
            <span className="feeds-bottom-icon">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt="horse"
              />
            </span>
            <span className="feeds-bottom-icon">
              <img
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                alt="공유"
              />
            </span>
            <span className="feeds-bottom-iconR">
              <div className="feeds-bottom-icon">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  alt="북마크"
                />
              </div>
            </span>
          </div>
          <div className="feeds-bottom-likes">
            <p>
              <b>좋아요 204개</b>
            </p>
          </div>
          <div className="text-area">
            <div className="text-area-1-1">
              <span>
                <b>7p3m1k</b>
              </span>
              &nbsp;안녕하세요
            </div>
            <div className="reply">
              <ul className="reply-box">
                {this.state.replies.map((el) => (
                  <li>
                    <strong>{el.author}</strong>
                    {el.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reply-input">
            <input
              type="text"
              className="reply-input-bar"
              placeholder="댓글달기..."
              onChange={this.textChange}
              onKeyPress={this.pressEnter}
            />
            <span>
              <button className="button-key" onClick={this.add}>
                게시
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
