import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  render() {
    const { story } = this.props;
    console.log(story.img);

    return (
      <div className="Story">
        <li className="storyList">
          <div className="storyCircleBorder">
            <div className="storyImgContainer">
              <img alt="" className="storyImg" src={story.img} />
            </div>
          </div>
          <p className="storyListName">{story.nickname}</p>
        </li>
      </div>
    );
  }
}
export default Story;
