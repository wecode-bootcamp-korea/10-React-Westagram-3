import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  goToSignup() {
    this.props.history.push("/keyoungbaeMain");
  }
  render() {
    return (
      <main>
        <div className="loginContanier">
          <div className="titleLogo">
            <img
              alt="instagram  logo"
              src="/Images/KEYOUNGBAEKIM/logo_text.png"
            />
          </div>
          <div className="inputContainer">
            <div className="clickInputContainer">
              <input
                className="loginInput"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="loginInput"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <button
              onClick={this.goToSignup.bind(this)}
              type="loginBtn"
              className="loginBtn"
            >
              로그인
            </button>
          </div>
          <div className="findPw">
            <button className="findPwText"> 비밀번호를 잊으셨나요 ? </button>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
