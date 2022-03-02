import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <h2>로그인</h2>
        <div class="loginForm">
          <form className="loginInput">
            <input
              className="loginInput;"
              type="text"
              placeholder="아이디(이메일)"
            />
            <input
              className="loginInputPw"
              type="text"
              placeholder="비밀번호"
            />
            <input className="checkBox" type="checked" />
            <p>아이디 저장</p>
            <button className="Button">로그인</button>
          </form>
          <div className="forgotId">
            <a
              href="https://kukka.kr/account/login/?next=/"
              className="forgotId"
              alt="아이디찾기"
            >
              아이디찾기
            </a>
          </div>
          <div className="forgotPw">
            <a
              href="https://kukka.kr/account/find-password/"
              className="forgotPw"
              alt="비밀번호 찾기"
            >
              비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
