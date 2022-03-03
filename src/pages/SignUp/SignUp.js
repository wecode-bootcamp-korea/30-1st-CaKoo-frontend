import React, { useState } from 'react';
import './SignUp.scss';

// Component 전체는 PascalCase
// 그 밑은 camelCase

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    password: '',
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
    fetch('http://10.58.3.222:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: signUpInfo.id,
        password: signUpInfo.password,
        name: signUpInfo.name,
        phone_number: signUpInfo.phone1 + signUpInfo.phone2 + signUpInfo.phone3,
        birthdate: `${signUpInfo.birthYear}-${signUpInfo.birthMonth}-${signUpInfo.birthDay}`,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <main className="signUp">
      <header className="signUpHeader">
        <h1 className="signUpTitle">회원가입</h1>
      </header>
      <fieldset>
        <form className="signUpForm">
          <div className="row">
            <label>이메일(아이디)</label>
            <input
              type="text"
              placeholder="예) cakoo@cakoo.com"
              className="email"
              onChange={handleChange}
              name="id"
            />
            <button type="button" disabled>
              중복확인
            </button>
          </div>
          <div className="row">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="영문, 숫자를 포함하여 8자리 - 20자리"
              className="password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="row">
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              className="passwordCheck"
              onChange={handleChange}
              name="passwordCheck"
            />
          </div>
          <div className="row">
            <label>이름</label>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              className="name"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="row">
            <label>휴대폰 본인인증</label>
            <div className="phone">
              <input
                type="text"
                className="phone1"
                placeholder="010"
                maxLength="3"
                onChange={handleChange}
                name="phone1"
              />
              <input
                type="text"
                className="phone2"
                maxLength="4"
                onChange={handleChange}
                name="phone2"
              />
              <input
                type="text"
                className="phone3"
                maxLength="4"
                onChange={handleChange}
                name="phone3"
              />
            </div>
            <button type="button" disabled>
              인증번호 받기
            </button>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="인증번호를 입력해주세요."
              className="phoneCertify"
            />
            <button type="button" disabled>
              확인
            </button>
          </div>
          <div className="row">
            <label className="birthTitle">생년월일</label>
            <div className="birth">
              <input
                type="text"
                placeholder="년도) 1999"
                className="birthYear"
                maxLength="4"
                onChange={handleChange}
                name="birthYear"
              />
              <input
                type="text"
                placeholder="월"
                className="birthMonth"
                maxLength="2"
                onChange={handleChange}
                name="birthMonth"
              />
              <input
                type="text"
                placeholder="일"
                className="birthDay"
                maxLength="2"
                onChange={handleChange}
                name="birthDay"
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
                      <input type="checkbox" />
                      <span className="boxIcon" />
                      모두 동의합니다.
                    </span>
                    <hr />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input type="checkbox" />
                      <span className="boxIcon" />
                      이용약관 동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input type="checkbox" />
                      <span className="boxIcon" />
                      개인정보 수집, 이용동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input type="checkbox" />
                      <span className="boxIcon" />
                      개인정보 이용 동의
                      <b>(필수)</b>
                    </span>
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span className="agree">
                      <input type="checkbox" />
                      <span className="boxIcon" />
                      이벤트, 혜택정보 수신 동의 (선택)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="agreeTerms">
              <button type="button" className="btn">
                이용약관 보기
              </button>
              ·
              <button type="button" className="btn">
                개인정보 처리방침 보기
              </button>
            </div>
          </div>
          <div className="signUpBtn">
            <button type="button" onClick={goToSignUp}>
              회원가입
            </button>
          </div>
        </form>
      </fieldset>
    </main>
  );
}

export default SignUp;
