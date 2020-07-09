import React, { Component } from "react";
import "./Feeds.scss";
class Feeds extends Component {
  render() {
    return (
      <article class="feeds">
        <div class="story">
          <ul class="storyUl">
            <li class="storyList">
              <div class="storyCircleBorder">
                <div class="storyImgContainer">
                  <img
                    alt="suuu___hyeon님의 프로필 사진"
                    class="storyImg"
                    data-testid="user-avatar"
                    draggable="false"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/105963957_1393173017539178_4111915575513971530_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=A3RgJBYYg-UAX9mHHo9&amp;oh=485fb072355614a7f22c5ed007a5de0c&amp;oe=5F28A2CC"
                  />
                </div>
              </div>
              <p class="storyListName">suuu_hyeon</p>
            </li>
            <li class="storyList">
              <div class="storyCircleBorder">
                <div class="storyImgContainer">
                  <img
                    alt="chriseriksen8님의 프로필 사진"
                    class="storyImg"
                    data-testid="user-avatar"
                    draggable="false"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83582979_2480329358884950_3387355197851303936_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=IAepNaEonk0AX_57fZF&amp;oh=4ddf0331ec83e1ec270a028ef09ad8c1&amp;oe=5F288F5B"
                  />
                </div>
              </div>
              <p class="storyListName">chriseriksen8</p>
            </li>
            <li class="storyList">
              <div class="storyCircleBorder">
                <div class="storyImgContainer">
                  <img
                    alt="iamzlatanibrahimovic님의 프로필 사진"
                    class="storyImg"
                    data-testid="user-avatar"
                    draggable="false"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/78854221_2560721244149785_8273416642113830912_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=uvx9llc42MEAX9fiQTf&amp;oh=404c31b9ac4e244ec71e0b740b7301cf&amp;oe=5F266A8C"
                  />
                </div>
              </div>
              <p class="storyListName">iamzlatanib...</p>
            </li>
            <li class="storyList">
              <div class="storyCircleBorder">
                <div class="storyImgContainer">
                  <img
                    alt="d_degeaofficial님의 프로필 사진"
                    class="storyImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67595298_482797968964751_2859843668129349632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=Z6YrdDNt88AAX_uV8QX&amp;oh=5c4d6b5cac880b1bcb8fa691a791f3de&amp;oe=5F26FE63"
                  />
                </div>
              </div>
              <p class="storyListName">d_degeaoffi...</p>
            </li>
            <li class="storyList">
              <div class="storyCircleBorder">
                <div class="storyImgContainer">
                  <img
                    alt="suckyun__님의 프로필 사진"
                    class="storyImg"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/102697334_259838728663931_7894723640914550925_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=CCEzdC4IeYkAX9peEqC&amp;oh=5885509e330aa79a732611c5043f12ed&amp;oe=5F277BCB"
                  />
                </div>
              </div>
              <p class="storyListName">suckun__</p>
            </li>
          </ul>
        </div>
        <div class="feedsBorder">
          <section class="feedsHeader">
            <div class="profileImgConatainer">
              <img
                class="feedsProfileImg"
                alt="profileImg"
                src="Images/KEYOUNGBAEKIM/tottenham (1).png"
              />
            </div>
            <div class="feedsProfileTitle">
              <p>spursoffical</p>
              <p>London, United Kingdom</p>
            </div>
            <div class="dotImgConatainer">
              <img
                alt="dot"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </section>
          <section class="feedsImg">
            <img alt="feeds img" src="Images/KEYOUNGBAEKIM/totten.PNG" />
          </section>
          <section class="feedsComment">
            <div class="commentBtnList">
              <div class="commentBtnContatiner">
                <button class="commentIconBtn">
                  <img
                    id="heartImg"
                    alt="하트"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </button>
              </div>
              <div class="commentBtnContatiner">
                <button class="commentIconBtn">
                  <img
                    alt="말풍선"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                </button>
              </div>
              <div class="commentBtnContatiner">
                <button class="commentIconBtn">
                  <img
                    alt="공유"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </button>
              </div>
              <div class="bookmark">
                <button class="commentIconBtn">
                  <img
                    alt="북마크"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </button>
              </div>
            </div>
            <div class="listComments">
              <h4 class="likeNumber">
                <strong>좋아요 133,165개</strong>
              </h4>
              <p class="normalText">
                <strong>spursoffical</strong> 🏴󠁧󠁢󠁥󠁮󠁧󠁿 𝗛𝗞𝟭𝟬 x 𝗦𝗕𝟮𝟯 🇳🇱
              </p>
              <p class="silverText">댓글 108개 모두 보기</p>
              <p class="normalText">
                <strong>giffertliwang </strong>@followforfootballpredictions
                don't do that, don't give me hope
              </p>
              <p class="normalText">
                <strong>jeedory </strong>🌪🌪
              </p>
              <div class="myCommentList"></div>
            </div>
          </section>
          <section class="writeComment">
            <input
              class="commentInput"
              name="inputWriteComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button class="commentBtn" name="inputSubmitBtn" type="submit">
              게시
            </button>
          </section>
        </div>
      </article>
    );
  }
}

export default Feeds;
