import React from "react";
import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="Login_MK">
        <div className="img-box">
          <img className="img-logo" src="images/logo_text.png" />
        </div>
        <input
          className="loginId"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
        />
        <input className="loginPw" type="password" placeholder="비밀번호" />
        <button className="loginbutton">로그인</button>
        <p className="lossPw">비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default Login;
