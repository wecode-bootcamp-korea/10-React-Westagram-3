import React, { Component } from "react";
import ArticleContents from "./ArticleContents";
import "./Feeds.scss";

class Feed extends Component {
  handleChangeLikes = (e) => {
    e.target.setAttribute("src", "/Images/JIYUNLEE/redheart.gif");
  };

  render() {
    const { handleChangeLikes } = this;

    return (
      <article>
        <div className="articleProfile">
          <div className="idPic">
            <img alt="" src="/images/JIYUNLEE/me.jpg" />
          </div>
          <div className="idSpan">
            <span>
              <strong>limosum91</strong>
            </span>
          </div>
          <div className="idMore">
            <img
              className="more"
              alt=""
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            />
          </div>
        </div>
        <div className="articlePictures">
          <img alt="" src="/images/JIYUNLEE/tonyStark.png" />
        </div>
        <div className="viewersBtn">
          <div className="viewersLeftBtn">
            <img
              alt=""
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              onClick={handleChangeLikes}
            ></img>
            <img
              alt=""
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
            ></img>
            <img
              alt=""
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
            ></img>
          </div>
          <img
            alt=""
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
          ></img>
        </div>
        <ArticleContents />
      </article>
    );
  }
}

export default Feed;
