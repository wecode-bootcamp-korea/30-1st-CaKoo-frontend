import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import API from '../../config';
import TextBox from './TextBox';

function Signup() {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const goToSignUp = () => {
    fetch(API.signup, {
      method: 'POST',
      body: JSON.stringify({
        email: signUpInfo.id,
        password: signUpInfo.password,
        name: signUpInfo.name,
        phone_number: signUpInfo.phone1 + signUpInfo.phone2 + signUpInfo.phone3,
        birthdate: `${signUpInfo.birthYear}-${signUpInfo.birthMonth}-${signUpInfo.birthDay}`,
      }),
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result.message);
        if (result.message === 'User Created!') {
          navigate('/signup-success');
        } else if (result.message === 'Invalid Email!') {
          alert('이메일 조건에 밎지 않습니다!');
        } else if (result.message === 'Invalid Password!') {
          alert('비밀번호 조건에 맞지 않습니다!');
        } else if (result.message === 'Email Already Exists!') {
          alert('중복된 이메일입니다!');
        } else if (result.message === 'KEY_ERROR') {
          alert('정보를 모두 입력해주세요!');
        }
      });
  };

  // const inputArr = [
  //   {
  //     label: '이메일(아이디)',
  //     type: 'text',
  //     placeholder: '예) cakoo@cakoo.com',
  //     className: 'email',
  //     name: 'id',
  //   },
  //   {
  //     label: '비밀번호',
  //     type: 'password',
  //     placeholder: '비밀번호를 한 번 더 입력해주세요.',
  //     className: 'passwordCheck',
  //     name: 'passwordCheck',
  //   },
  // ];

  const spcString = [
    '!',
    '~',
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

  return (
    <main className="signup">
      <header className="signUpHeader">
        <h1 className="signUpTitle">회원가입</h1>
      </header>
      <fieldset>
        <form className="signUpForm">
          {/* {inputArr.map(data => {
            console.log(data, data.label);
            return (
              <TextBox key={data.label} data={data} onChange={handleChange} />
            );
          })} */}
          <TextBox
            label="이메일(아이디)"
            type="text"
            placeholder="예) cakoo@cakoo.com"
            className="email"
            name="id"
            onChange={handleChange}
          >
            <button
              className={
                signUpInfo.id.includes('@') && signUpInfo.id.includes('.')
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </TextBox>
          <TextBox
            label="비밀번호"
            type="password"
            placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
            className="password"
            name="password"
            onChange={handleChange}
          />
          <TextBox
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            className="passwordCheck"
            name="passwordCheck"
            onChange={handleChange}
          >
            <button
              className={
                signUpInfo.password === signUpInfo.passwordCheck &&
                signUpInfo.password.length >= 8 &&
                spcString
                  .map(str => signUpInfo.password.includes(str))
                  .includes(true)
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </TextBox>
          <TextBox
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요."
            className="name"
            name="name"
            onChange={handleChange}
          />
          <div className="row">
            <label>휴대폰 번호</label>
            <div className="phone">
              <input
                type="text"
                placeholder="010"
                className="phone1"
                name="phone1"
                maxLength="3"
                onChange={handleChange}
              />
              <input
                type="text"
                className="phone2"
                name="phone2"
                maxLength="4"
                onChange={handleChange}
              />
              <input
                type="text"
                className="phone3"
                name="phone3"
                maxLength="4"
                onChange={handleChange}
              />
            </div>
            <button
              className={
                signUpInfo.phone1.length +
                  signUpInfo.phone2.length +
                  signUpInfo.phone3.length >=
                11
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </div>
          {/* <div className="row">
            <TextBox
              type="text"
              placeholder="인증번호를 입력해주세요"
              className="phoneCertify"
              onChange={handleChange}
            />
            <Button className="button">확인</Button>
          </div> */}
          <div className="row">
            <label className="birthTitle">생년월일</label>
            <div className="birth">
              <input
                type="text"
                placeholder="년도) 1999"
                className="birthYear"
                name="birthYear"
                maxLength="4"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="월"
                className="birthMonth"
                name="birthMonth"
                maxLength="2"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="일"
                className="birthDay"
                name="birthDay"
                maxLength="2"
                onChange={handleChange}
              />
            </div>
          </div>
          <hr />
          <div className="termConditionBox">
            <span className="termConditionAgree">이용약관 동의</span>
            <div className="termConditionAgreeBox">
              <ul className="agreeList">
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      <input className="checkbox" type="checkbox" />
                      <span className="boxIcon" />
                      모두 동의합니다.
                    </span>
                    <hr />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input className="checkbox" type="checkbox" />
                      <span className="boxIcon" />
                      이용약관 동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input className="checkbox" type="checkbox" />
                      <span className="boxIcon" />
                      개인정보 수집, 이용동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input className="checkbox" type="checkbox" />
                      <span className="boxIcon" />
                      개인정보 이용 동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input className="checkbox" type="checkbox" />
                      <span className="boxIcon" />
                      이벤트, 혜택정보 수신 동의 (선택)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="agreeTerms">
              <a href="$" type="button">
                이용약관 보기
              </a>
              ·
              <a href="$" type="button">
                개인정보 처리방침 보기
              </a>
            </div>
          </div>
          <div className="signUpBtn">
            <button className="button" type="button" onClick={goToSignUp}>
              회원가입
            </button>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default Signup;
