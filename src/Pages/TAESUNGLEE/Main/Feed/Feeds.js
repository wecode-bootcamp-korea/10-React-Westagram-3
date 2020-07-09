import React, { Component } from "react";
import "./Feeds.scss";

class Feeds extends Component {
  render() {
    return (
      <div className="Feeds">
        <header>
          <div className="profileImgBox">
            <img
              className="profileImg"
              alt="profileImg"
              src="/images/LEETAESUNG/dully.jpg"
            />
          </div>
          <div className="headerInformation">
            <div className="namePlace">
              <div>
                <span className="font">loco</span>
              </div>
              <div>
                <span className="subFont">북촌한옥마을</span>
              </div>
            </div>
            <div className="threeDotPlace">
              <img
                className="threeDot"
                alt="threeDot"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
        </header>
        <article className="article">
          <div>
            <img
              className="post"
              alt="post"
              src="/images/LEETAESUNG/hanouk.jpg"
            />
          </div>
          <div className="articleIcon">
            <div>
              <button className="articleButton">
                <img
                  className="articleIconImg"
                  alt="heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </button>
              <button className="articleButton">
                <img
                  className="articleIconImg"
                  alt="goPost"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                />
              </button>
              <button className="articleButton">
                <img
                  className="articleIconImg"
                  alt="share"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                />
              </button>
            </div>
            <div>
              <button className="articleButton">
                <img
                  className="articleIconImg"
                  alt="bookMark"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                />{" "}
              </button>
            </div>
          </div>
          <div className="likeNumber">
            <span className="font">좋아요 1개</span>
          </div>
          <form className="commentLog">
            <ul></ul>
          </form>
          <div className="flex commentBox">
            <input className="comment" type="text" placeholder="댓글달기..." />
            <button className="flex upLoadComment">게시</button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
