import React, { Component } from "react";
import "./Feeds.scss";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: ["아하하 미쳐버릴 거야", "리액트 멘탈 파괴"],
      comment: "",
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleClickSubmit = () => {
    this.setState({
      commentsList: this.state.commentsList.concat(this.state.comment),
      comment: "",
    });
  };

  handleEnterSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        commentsList: this.state.commentsList.concat(this.state.comment),
        comment: "",
      });
    }
  };

  canBeSubmitted() {
    const { comment } = this.state;
    return comment.length > 0;
  }

  render() {
    const { handleCommentChange, handleClickSubmit, handleEnterSubmit } = this;
    const isEabled = this.canBeSubmitted();

    const commentBox = this.state.commentsList.map((c) => {
      return (
        <li>
          <div>
            <strong>limosum91 </strong>
            <span>{c}</span>
          </div>
          <img
            className="commentLikes"
            alt=""
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          ></img>
        </li>
      );
    });

    return (
      <div className="feedsColumn_JY">
        <div className="feeds">
          <div>
            <div className="storyFrame">
              <div className="storyOverflow">
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/avengers.jpg" />
                    <div className="storyProfile">avengers</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/marvel.jpg" />
                    <div className="storyProfile">marvel</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/robert.jpg" />
                    <div className="storyProfile">robertdowneyjr</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/tom.jpg" />
                    <div className="storyProfile">tomholland2013</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/chris.jpg" />
                    <div className="storyProfile">chrishemsworth</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/scarlett.jpg" />
                    <div className="storyProfile">scarlett.johansson.fc</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/me.jpg" />
                    <div className="storyProfile">limosum91</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img alt="" src="/images/JIYUNLEE/wecode.jpg" />
                    <div className="storyProfile">wecode_bootcamp</div>
                  </div>
                </div>
              </div>
            </div>
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
                <img alt="" src="/images/JIYUNLEE/spiderman.jpeg" />
              </div>
              <div className="viewersBtn">
                <div className="viewersLeftBtn">
                  <img
                    alt=""
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
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

              <div className="articleContent">
                <div className="likes">
                  <img
                    className="likepic"
                    alt=""
                    src="/images/JIYUNLEE/tom.jpg"
                  />
                  <span className="likeId">
                    <strong>tomholland2013</strong>
                  </span>
                  <span>
                    님 <strong>외 3명</strong>이 좋아합니다.
                  </span>
                </div>
                <div className="feedContents">
                  <span>
                    <strong>limosum91</strong>
                  </span>
                  <div className="texts">
                    <span className="notOverFlow"></span>
                    <span className="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                      egestas vitae scelerisque enim ligula venenatis dolor.
                      Maecenas nisl est, ultrices nec congue eget, auctor vitae
                      massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                      sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                      In at libero sed nunc venenatis imperdiet sed ornare
                      turpis. Donec vitae dui eget tellus gravida venenatis.
                      Integer fringilla congue eros non fermentum. Sed dapibus
                      pulvinar nibh tempor porta.
                    </span>
                    <button className="moreBtn">더 보기</button>
                  </div>
                </div>
                <div className="commentsList">
                  <ul className="commentsFrame">{commentBox}</ul>
                </div>
              </div>
              <div className="comments">
                <div className="createComment" autoComplete="off">
                  <textarea
                    className="inputComment"
                    placeholder="댓글 달기..."
                    value={this.state.comment}
                    onChange={handleCommentChange}
                    onKeyPress={handleEnterSubmit}
                  ></textarea>
                  <button
                    className={isEabled ? "activateBtn" : "btnNotAvailable"}
                    disabled={!this.state.comment}
                    onClick={handleClickSubmit}
                  >
                    게시
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
