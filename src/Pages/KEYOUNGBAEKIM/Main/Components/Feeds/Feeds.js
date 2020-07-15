import React, { Component } from "react";
import Story from "../Story/Story";
import "./Feeds.scss";

class Feeds extends Component {
  state = {
    heart: true,
    src:
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png",
    input: "",
    todos: [
      { nickname: "zlatan_ibrah...", text: "good!", id: 1 },
      {
        nickname: "giffertliwang",
        text: "predictions don't do that, don't give me hope",
        id: 2,
      },
      { nickname: "jeedory", text: "🌪🌪", id: 3 },
    ],

    story: [
      { nickname: "wecode", img: "Images/KEYOUNGBAEKIM/wecode.jpg" },
      { nickname: "wecode", img: "Images/KEYOUNGBAEKIM/wecode.jpg" },
      { nickname: "wecode", img: "Images/KEYOUNGBAEKIM/wecode.jpg" },
      { nickname: "tottenham", img: "Images/KEYOUNGBAEKIM/tottenham (1).png" },
      { nickname: "tottenham", img: "Images/KEYOUNGBAEKIM/tottenham (1).png" },
    ],
  };

  onCreate = () => {
    const { input, todos } = this.state;
    if (input) {
      this.setState({
        input: "",
        todos: todos.concat({
          id: this.id++,
          text: input,
          nickname: this.nickname,
        }),
      });
    }
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
      nickname: "rudqo_723",
    });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onCreate();
    }
  };

  onHeartClick = () => {
    let { heart } = this.state;

    heart === true
      ? this.setState({
          src: "Images/KEYOUNGBAEKIM/heart.png",
          heart: false,
        })
      : this.setState({
          src:
            "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png",
          heart: true,
        });
  };

  render() {
    const { input, todos, story } = this.state;
    const { onChange, onCreate, onKeyPress, onHeartClick } = this;

    const todoList = todos.map(({ text, nickname }) => (
      <p className="normalText">
        <strong>{nickname + " "}</strong>
        {text}
      </p>
    ));

    return (
      <article className="Feeds">
        <div className="story">
          <ul className="storyUl">
            {story.map((story) => (
              <Story story={story}></Story>
            ))}
          </ul>
        </div>

        <div className="feedsBorder">
          <section className="feedsHeader">
            <div className="profileImgConatainer">
              <img
                className="feedsProfileImg"
                alt="profileImg"
                src="Images/KEYOUNGBAEKIM/tottenham (1).png"
              />
            </div>
            <div className="feedsProfileTitle">
              <p>spursoffical</p>
              <p>London, United Kingdom</p>
            </div>
            <div className="dotImgConatainer">
              <img
                alt="dot"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </section>
          <section className="feedsImg">
            <img alt="feeds img" src="Images/KEYOUNGBAEKIM/totten.PNG" />
          </section>
          <section className="feedsComment">
            <div className="commentBtnList">
              <div className="commentBtnContatiner">
                <button className="commentIconBtn">
                  <img
                    id="heartImg"
                    alt="하트"
                    src={this.state.src}
                    onClick={onHeartClick}
                  />
                </button>
              </div>
              <div className="commentBtnContatiner">
                <button className="commentIconBtn">
                  <img
                    alt="말풍선"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                </button>
              </div>
              <div className="commentBtnContatiner">
                <button className="commentIconBtn">
                  <img
                    alt="공유"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </button>
              </div>
              <div className="bookmark">
                <button className="commentIconBtn">
                  <img
                    alt="북마크"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </button>
              </div>
            </div>
            <div className="listComments">
              <h4 className="likeNumber">
                <strong>좋아요 133,165개</strong>
              </h4>
              <p className="normalText">
                <strong>spursoffical</strong> 🏴󠁧󠁢󠁥󠁮󠁧󠁿 𝗛𝗞𝟭𝟬 x 𝗦𝗕𝟮𝟯 🇳🇱
              </p>
              <p className="silverText">댓글 108개 모두 보기</p>
              <div className="myCommentList">{todoList}</div>
            </div>
          </section>
          <section className="writeComment">
            <input
              className="commentInput"
              name="inputWriteComment"
              type="text"
              value={input}
              onKeyPress={onKeyPress}
              onChange={onChange}
              placeholder="댓글 달기..."
            />
            <button
              className={input ? "activeCommentBtn" : "disableCommentBtn"}
              name="inputSubmitBtn"
              type="submit"
              onClick={onCreate}
            >
              게시
            </button>
          </section>
        </div>
      </article>
    );
  }
}

export default Feeds;
