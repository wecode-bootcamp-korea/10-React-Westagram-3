import React, { Component } from "react";
import "./Main.scss";
class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="mainContainer">
          <article className="feeds">
            <div className="story">
              <ul className="storyUl">
                <li className="storyList">
                  <div className="storyCircleBorder">
                    <div className="storyImgContainer">
                      <img
                        alt="suuu___hyeon님의 프로필 사진"
                        className="storyImg"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/105963957_1393173017539178_4111915575513971530_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=A3RgJBYYg-UAX9mHHo9&amp;oh=485fb072355614a7f22c5ed007a5de0c&amp;oe=5F28A2CC"
                      />
                    </div>
                  </div>
                  <p className="storyListName">suuu_hyeon</p>
                </li>
                <li className="storyList">
                  <div className="storyCircleBorder">
                    <div className="storyImgContainer">
                      <img
                        alt="chriseriksen8님의 프로필 사진"
                        className="storyImg"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/83582979_2480329358884950_3387355197851303936_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=IAepNaEonk0AX_57fZF&amp;oh=4ddf0331ec83e1ec270a028ef09ad8c1&amp;oe=5F288F5B"
                      />
                    </div>
                  </div>
                  <p className="storyListName">chriseriksen8</p>
                </li>
                <li className="storyList">
                  <div className="storyCircleBorder">
                    <div className="storyImgContainer">
                      <img
                        alt="iamzlatanibrahimovic님의 프로필 사진"
                        className="storyImg"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/78854221_2560721244149785_8273416642113830912_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=uvx9llc42MEAX9fiQTf&amp;oh=404c31b9ac4e244ec71e0b740b7301cf&amp;oe=5F266A8C"
                      />
                    </div>
                  </div>
                  <p className="storyListName">iamzlatanib...</p>
                </li>
                <li className="storyList">
                  <div className="storyCircleBorder">
                    <div className="storyImgContainer">
                      <img
                        alt="d_degeaofficial님의 프로필 사진"
                        className="storyImg"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67595298_482797968964751_2859843668129349632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=Z6YrdDNt88AAX_uV8QX&amp;oh=5c4d6b5cac880b1bcb8fa691a791f3de&amp;oe=5F26FE63"
                      />
                    </div>
                  </div>
                  <p className="storyListName">d_degeaoffi...</p>
                </li>
                <li className="storyList">
                  <div className="storyCircleBorder">
                    <div className="storyImgContainer">
                      <img
                        alt="suckyun__님의 프로필 사진"
                        className="storyImg"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/102697334_259838728663931_7894723640914550925_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=CCEzdC4IeYkAX9peEqC&amp;oh=5885509e330aa79a732611c5043f12ed&amp;oe=5F277BCB"
                      />
                    </div>
                  </div>
                  <p className="storyListName">suckun__</p>
                </li>
              </ul>
            </div>
            <article className="feedsBorder">
              <section className="feedsHeader">
                <div className="profileImgConatainer">
                  <img
                    className="feedsProfileImg"
                    alt="profileImg"
                    src="/Images/tottenham (1).png"
                  />
                </div>
                <div className="feedsProfileTitle">
                  <p className="feedsTitle">spursoffical</p>
                  <p className="feedsTitle">London, United Kingdom</p>
                </div>
                <div className="dotImgConatainer">
                  <img
                    alt="dot"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  />
                </div>
              </section>
              <section className="feedsImg">
                <img alt="feeds img" src="/Images/totten.png" />
              </section>
              <section className="feedsComment">
                <div className="commentBtnList">
                  <div className="commentBtnContatiner">
                    <button className="commentIconBtn">
                      <img
                        id="heartImg"
                        alt="하트"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
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
                  <p className="normalText">
                    <strong>giffertliwang </strong>@followforfootballpredictions
                    don't do that, don't give me hope
                  </p>
                  <p className="normalText">
                    <strong>jeedory </strong>🌪🌪
                  </p>
                  <div className="myCommentList"></div>
                </div>
              </section>
              <section className="writeComment">
                <input
                  className="commentInput"
                  name="inputWriteComment"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button
                  className="commentBtn"
                  name="inputSubmitBtn"
                  type="submit"
                >
                  게시
                </button>
              </section>
            </article>
          </article>
          <div className="fixedContainer">
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
                <button className="recommendationBtn">모두 보기</button>
              </div>
              <div className="followContainer">
                <div className="followMemberContainer">
                  <div className="roundImg">
                    <img
                      alt="byunginsta님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
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
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
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
                      data-testid="user-avatar"
                      draggable="false"
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
        </div>
      </main>
    );
  }
}

export default Main;
