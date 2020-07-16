import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      check: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      check:
        this.state.password.length > 5 && this.state.email.includes("@")
          ? true
          : false,
    });
  };

  getColsoleValue = () => {
    console.log(
      "아이디 :",
      this.state.email,
      "패스워드 :",
      this.state.password
    );
    this.props.history.push("/parkminkyuMain");

    // 회원가입
    fetch("http://10.58.0.223:8000/user/signin ", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json()) //JSON body -> JS
      .then((res) => sessionStorage.setItem("access_token", res.access_token));
  };

  render() {
    return (
      <div className="Login_MK">
        <div className="img-box">
          <img className="img-logo" src="images/PARKMINKYU/logo_text.png" />
        </div>
        <input
          className="loginId"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          className="loginPw"
          type="password"
          placeholder="비밀번호"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button
          className={this.state.check ? "loginbutton-blue " : "loginbutton"}
          onClick={this.getColsoleValue}
        >
          로그인
        </button>
        <p className="lossPw">비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default Login;
