import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="Login_taesung">
        <div className="idBoxContainer">
          <div className="containerImg">
            <img alt="logo" src="/images/LEETAESUNG/logo_text.png" />
          </div>
          <div className="inputContainer">
            <div>
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
            </div>
            <div>
              <Link to="/taesungmain">
                <button className="button">로그인</button>
              </Link>
            </div>
            <div>
              <p className="findPw">비밀번호를 잊으셨나요?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
