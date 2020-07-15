import React, { Component } from "react";
import "./Feeds.scss";
import FirstFeed from "./FirstFeed";
import SecondFeed from "./SecondFeed";

class Feeds extends Component {
  render() {
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
            <FirstFeed />
            <SecondFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
