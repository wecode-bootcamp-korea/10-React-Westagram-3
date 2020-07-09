import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  goToMain() {
    this.props.history.push("/jiyunMain");
  }
  render() {
    return (
      <div class="Login">
        <div className="box">
          <div className="box1">
            <img
              className="logo"
              src="/images/JIYUNLEE/logo_text.png"
              width="175px"
            />
            <form className="inputLogin">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                autocomplete="off"
              />
              <input type="password" id="inputpw" placeholder="비밀번호" />
              <button onClick={this.goToMain.bind(this)} type="button">
                로그인
              </button>
            </form>
            <div className="or">
              <hr className="orLine" />
              <span>또는</span>
              <hr className="orLine" />
            </div>
            <div className="loginIssue">
              <div className="faceBook">
                <img src="/images/JIYUNLEE/facebook.jpg" />
                <span>
                  <strong>Facebook</strong>으로 로그인
                </span>
              </div>
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </div>
          <div className="box2">
            <p>
              계정이 없으신가요?
              <strong>
                <a href="#" className="joinUs">
                  가입하기
                </a>
              </strong>
            </p>
          </div>
          <div className="box3">
            <span>앱을 다운로드하세요.</span>
          </div>
          <div className="box4">
            <div className="imgBox">
              <img
                className="downloadLink"
                src="/images/JIYUNLEE/downloadIos.png"
              />
              <img
                className="downloadLink"
                src="/images/JIYUNLEE/downloadAndr.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
