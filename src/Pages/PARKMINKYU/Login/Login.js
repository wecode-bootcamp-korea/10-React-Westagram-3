import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  getColsoleValue = () => {
    console.log(
      "아이디 :",
      this.state.email,
      "패스워드 :",
      this.state.password
    );
    this.props.history.push("/parkminkyuMain");
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
          className="loginbutton"
          onClick={this.getColsoleValue}
          style={{
            backgroundColor:
              this.state.email.includes("@") && this.state.password.length > 5
                ? "rgba(0, 149, 246, 1)"
                : "",
          }}
        >
          로그인
        </button>
        <p className="lossPw">비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default Login;
