import React, { Component } from "react";
import "./Feeds.scss";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      commentsList: [
        { id: 0, text: "화...이팅..." },
        { id: 1, text: "삭제 기능 구현을 위해 id 값을 추가하였음" },
      ],
      id: 2,
      textarea: "",
    };
  }

  handleChangeComment = (e) => {
    this.setState({ textarea: e.target.value });
  };

  handleCreateComment = () => {
    const { textarea, commentsList, id } = this.state;
    this.setState({
      id: id + 1,
      commentsList: [...commentsList, { id: id, text: textarea }],
      textarea: "",
      redHeart: false,
    });
  };

  handleEnterSubmit = (e) => {
    if (e.key === "Enter") {
      this.handleCreateComment();
    }
  };

  handleClickSubmit = () => {
    this.handleCreateComment();
  };

  handleChangeLikes = (e) => {
    e.target.setAttribute("src", "/Images/JIYUNLEE/redheart.gif");
  };

  handleRemoveComent = (e) => {
    const { commentsList } = this.state;
    let deleteTarget = e.target.parentNode.parentNode.id;
    const result = commentsList.filter((i) => i.id !== Number(deleteTarget));
    this.setState({
      commentsList: result,
    });
  };

  render() {
    const {
      textarea,
      handleChangeComment,
      handleClickSubmit,
      handleEnterSubmit,
      handleRemoveComent,
      handleChangeLikes,
    } = this;
    const isEnabled = this.state.textarea.length > 0;

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
          <img alt="" src="/images/JIYUNLEE/spiderman.jpeg" />
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

        <div className="articleContent">
          <div className="likes">
            <img className="likepic" alt="" src="/images/JIYUNLEE/tom.jpg" />
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
                egestas vitae scelerisque enim ligula venenatis dolor. Maecenas
                nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
                luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
                sed ullamcorper ipsum dignissim ac. In at libero sed nunc
                venenatis imperdiet sed ornare turpis. Donec vitae dui eget
                tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
              <button className="moreBtn">더 보기</button>
            </div>
          </div>
          <div className="showComments">
            <ul className="commentsList">
              {this.state.commentsList.map((text) => {
                return (
                  <li id={text.id}>
                    <div className="newComment">
                      <strong>limosum91 </strong>
                      {text.text}
                    </div>
                    <div className="newCommentBtn">
                      <img
                        type="button"
                        className="commentDelete"
                        alt=""
                        src="Images/JIYUNLEE/xBtn.png"
                        onClick={handleRemoveComent}
                      ></img>
                      <img
                        className="commentLikes"
                        alt=""
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      ></img>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="comments">
          <div className="createComment" autoComplete="off">
            <textarea
              className="inputComment"
              placeholder="댓글 달기..."
              onKeyUp={handleEnterSubmit}
              onChange={handleChangeComment}
              value={this.state.textarea}
            ></textarea>
            <button
              className={isEnabled ? "activateBtn" : "btnNotAvailable"}
              disabled={!this.state.textarea}
              onClick={handleClickSubmit}
            >
              게시
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Feed;
