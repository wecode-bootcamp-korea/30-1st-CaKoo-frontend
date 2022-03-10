import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../config';
import './Login.scss';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  // const navigate = useNavigate();

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  const spcString = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '|',
    '<',
    '>',
    '?',
    ':',
    '{',
    '}',
  ];

  const isValid = () => {
    if (
      idValue.includes('@') &&
      idValue.includes('.') &&
      pwValue.length >= 8 &&
      spcString.map(str => pwValue.includes(str)).includes(true)
    ) {
      return true;
    }
    return false;
  };

  // const condition = idValue.length > 0 && pwValue.length > 0;

  const navigate = useNavigate();

  const handleFetch = () => {
    fetch(API.signin, {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          navigate('/');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <div className="login">
      <h1>로그인</h1>
      <div className="loginFormBox">
        <form className="loginForm">
          <input
            className="loginInput"
            type="text"
            onChange={handleIdInput}
            placeholder="아이디 (이메일)"
            name="userName"
          />
          <input
            required
            className="loginInput"
            type="password"
            onChange={handlePwInput}
            placeholder="비밀번호"
            text="password"
          />
          <div className="idSave">
            <input id="checkbox" className="checkBox" type="checkbox" />
            <label htmlFor="checkbox" className="circle" />
            <span>아이디 저장</span>
          </div>
          <button
            type="button"
            className={isValid() ? 'loginBtn yellow' : 'loginBtn'}
            onClick={handleFetch}
            disabled={!isValid()}
          >
            로그인
          </button>
        </form>
        <div className="forgotContainer">
          <Link to="/" className="forgot" alt="아이디 찾기" /> 아이디찾기
          <Link to="/" className="forgot" alt="비밀번호 찾기" /> 비밀번호 찾기
        </div>
      </div>
    </div>
  );
}

export default Login;
