import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="logIn">
      <div className="logInContainer">
        <h1>로그인</h1>
        <div class="logInForm">
          <form className="logInInput">
            <input
              className="logInInput"
              type="text"
              placeholder="아이디 (이메일)"
            />
            <input
              className="logInInputPw"
              type="text"
              placeholder="비밀번호"
            />
            <input className="checkBox" type="checked" />
            <button className="button">로그인</button>
          </form>
            <p>아이디 저장</p>
          </div>
          <div className="forGotContainer">
            <div className="forGotId">
              <a
                href="https://kukka.kr/account/login/?next=/"
                className="forgotId"
                alt="아이디찾기"
              >
                아이디찾기
              </a>
            </div>
            <div className="forGotPw">
              <a
                href="https://kukka.kr/account/find-password/"
                className="forGotPw"
                alt="비밀번호 찾기"
              >
                비밀번호 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
