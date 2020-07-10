import React, { Component } from "react";
import "./Feeds.scss";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
    };
  }
  // handleEnterSubmit = (e) => {
  //   if (this.canBeSubmitted() && e.keyCode === 13) {
  //     console.log("ok!");
  //   }
  // };
  canBeSubmitted() {
    const { comment } = this.state;
    return comment.length > 0;
  }
  render() {
    return (
      <div className="feedsColumn_JY">
        <div className="feeds">
          <div>
            <div className="storyFrame">
              <div className="storyOverflow">
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/avengers.jpg" />
                    <div className="storyProfile">avengers</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/marvel.jpg" />
                    <div className="storyProfile">marvel</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/robert.jpg" />
                    <div className="storyProfile">robertdowneyjr</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/tom.jpg" />
                    <div className="storyProfile">tomholland2013</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/chris.jpg" />
                    <div className="storyProfile">chrishemsworth</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/scarlett.jpg" />
                    <div className="storyProfile">scarlett.johansson.fc</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/me.jpg" />
                    <div className="storyProfile">limosum91</div>
                  </div>
                </div>
                <div className="eachStoryBox">
                  <div className="borders">
                    <img src="/images/JIYUNLEE/wecode.jpg" />
                    <div className="storyProfile">wecode_bootcamp</div>
                  </div>
                </div>
              </div>
            </div>
            <article>
              <div className="articleProfile">
                <div className="idPic">
                  <img alt="myProfile" src="/images/JIYUNLEE/me.jpg" />
                </div>
                <div className="idSpan">
                  <span>
                    <strong>limosum91</strong>
                  </span>
                </div>
                <div className="idMore">
                  <img
                    className="more"
                    alt="more"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  />
                </div>
              </div>
              <div className="articlePictures">
                <img src="/images/JIYUNLEE/spiderman.jpeg" />
              </div>
              <div className="viewersBtn">
                <div className="viewersLeftBtn">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"></img>
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"></img>
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"></img>
                </div>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"></img>
              </div>

              <div className="articleContent">
                <div className="likes">
                  <img className="likepic" src="/images/JIYUNLEE/tom.jpg" />
                  <span className="likeId">
                    <strong>tomholland2013</strong>
                  </span>
                  <span>
                    님 <strong>외 3명</strong>이 좋아합니다.
                  </span>
                </div>
                <div className="feedContents">
                  <p>
                    <strong>limosum91</strong>
                  </p>
                  <div className="texts">
                    <p className="notOverFlow"></p>
                    <p className="paragraph">
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
                    </p>
                    <button className="moreBtn">더 보기</button>
                  </div>
                </div>
                <div className="commentsList">
                  <ul className="commentsFrame">
                    <li className="firstC">
                      <strong>limosum91</strong>
                      <span>피드 댓글</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comments">
                <form className="createComment" autocomplete="off">
                  <textarea
                    className="inputComment"
                    placeholder="댓글 달기..."
                  ></textarea>
                  <button className="commentBtn">게시</button>
                </form>
              </div>
            </article>

            <article>
              <div className="articleProfile">
                <div className="idPic">
                  <img alt="myProfile" src="/images/JIYUNLEE/me.jpg" />
                </div>
                <div className="idSpan">
                  <span>
                    <strong>limosum91</strong>
                  </span>
                </div>
                <div className="idMore">
                  <img
                    className="more"
                    alt="more"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  />
                </div>
              </div>
              <div className="articlePictures">
                <img alt="tonyStark" src="/images/JIYUNLEE/tonyStark.png" />
              </div>
              <div className="viewersBtn">
                <div className="viewersLeftBtn">
                  <img
                    alt="like"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  ></img>
                  <img
                    alt="comment"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  ></img>
                  <img
                    alt="share"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  ></img>
                </div>
                <img
                  alt="bookmark"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                ></img>
              </div>

              <div className="articleContent">
                <div className="likes">
                  <img
                    className="likepic"
                    alt="tom"
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
                  <p>
                    <strong>limosum91</strong>
                  </p>
                  <div className="texts">
                    <p className="notOverFlow"></p>
                    <p className="paragraph">
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
                    </p>
                    <button className="moreBtn">더 보기</button>
                  </div>
                </div>
                <div className="commentsList">
                  <ul className="commentsFrame">
                    <li className="firstC">
                      <strong>limosum91</strong>
                      <span>피드 댓글</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comments">
                <form className="createComment" autocomplete="off">
                  <textarea
                    className="inputComment"
                    placeholder="댓글 달기..."
                  ></textarea>
                  <button className="commentBtn">게시</button>
                </form>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
