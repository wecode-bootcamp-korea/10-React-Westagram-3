import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      token: "",
    };
  }

  onClick = () => {
    fetch("http://10.58.4.0:8000/user/in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        token: this.state.token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token !== null) {
          sessionStorage.setItem("token", res.token);
          this.props.history.push("/keyoungbaeMain");
        } else {
          alert("로그인 정보가 맞지 않습니다.");
        }
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <main className="Login_KB">
        <div className="loginContanier">
          <div className="titleLogo">
            <img
              alt="instagram  logo"
              src="/Images/KEYOUNGBAEKIM/logo_text.png"
            />
          </div>
          <div className="inputContainer">
            <div className="clickInputContainer" onChange={this.onChange}>
              <input
                className="loginInput"
                name="email"
                defaultValue={this.state.email}
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="loginInput"
                name="password"
                defaultValue={this.state.password}
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <button
              onClick={this.onClick}
              type="loginBtn"
              className={
                this.state.email.includes("@") &&
                this.state.password.length >= 5
                  ? "activeLoginBtn"
                  : "disableLoginBtn"
              }
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
