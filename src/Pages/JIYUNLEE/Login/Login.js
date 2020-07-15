import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleEnterLogin = (e) => {
    if (e.keyCode === 13) {
      this.goToMain();
    }
  };

  goToMain() {
    console.log("onClick");
    console.log(this.state.email);
    console.log(this.state.password);

    fetch("http://10.58.0.219:8000/user/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json()) // JSON >>> JS
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
          alert(`${this.state.email} 님, 로그인 성공!`);
          this.props.history.push("/jiyunMain");
        } else {
          alert("ID와 비밀번호를 확인하세요");
        }
      });
  }

  render() {
    const { email, password } = this.state;
    const isEnabled = email.includes("@") && password.length > 5;

    return (
      <div className="Login_JY">
        <div className="box">
          <div className="box1">
            <img
              className="logo"
              alt="logo"
              src="/images/JIYUNLEE/logo_text.png"
            />
            <div className="inputLogin">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={this.state.email}
                onChange={this.handleEmailChange}
                onKeyUp={this.handleEnterLogin}
                autoComplete="off"
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                onKeyUp={this.handleEnterLogin}
              />
              <button
                disabled={!isEnabled}
                onClick={this.goToMain.bind(this)}
                style={{
                  backgroundColor: isEnabled ? "skyblue" : "lightblue",
                }}
                type="button"
              >
                로그인
              </button>
            </div>
            <div className="or">
              <hr className="orLine" />
              <span>또는</span>
              <hr className="orLine" />
            </div>
            <div className="loginIssue">
              <div className="faceBook">
                <img alt="facebook" src="/images/JIYUNLEE/facebook.jpg" />
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
                <a href="/jiyunMain" className="joinUs">
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
                alt="downloadIos"
                src="/images/JIYUNLEE/downloadIos.png"
              />
              <img
                className="downloadLink"
                alt="downloadAndroid"
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
