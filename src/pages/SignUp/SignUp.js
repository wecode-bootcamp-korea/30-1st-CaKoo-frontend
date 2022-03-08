import React, { useState } from 'react';
import './SignUp.scss';
import TextBox from './TextBox';
import Button from './Button';

function SignUp() {
  const [idValue, setIdValue] = useState('');
  const [numValue, setNumValue] = useState('');
  const [numValue2, setNumValue2] = useState('');
  const [numValue3, setNumValue3] = useState('');

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

  const handleIdInput = event => {
    setIdValue(event.target.value);
  };

  const handleNumInput = event => {
    setNumValue(event.target.value);
  };

  const handleNumInput2 = event => {
    setNumValue2(event.target.value);
  };

  const handleNumInput3 = event => {
    setNumValue3(event.target.value);
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
    }).then(response => response.json());
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
            <TextBox
              type="text"
              placeholder="예) cakoo@cakoo.com"
              className="email"
              name="id"
              onChange={(handleChange, handleIdInput)}
            />
            <Button className={idValue.includes('@') ? 'buttonOn' : 'button'}>
              중복확인
            </Button>
          </div>
          <div className="row">
            <label>비밀번호</label>
            <TextBox
              type="password"
              placeholder="영문, 숫자를 포함하여 8자리 - 20자리"
              className="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>비밀번호 확인</label>
            <TextBox
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              className="passwordCheck"
              name="passwordCheck"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>이름</label>
            <TextBox
              type="text"
              placeholder="이름을 입력해주세요."
              className="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label>휴대폰 본인인증</label>
            <div className="phone">
              <TextBox
                type="text"
                placeholder="010"
                className="phone1"
                name="phone1"
                maxLength="3"
                onChange={(handleChange, handleNumInput)}
              />
              <TextBox
                type="text"
                className="phone2"
                name="phone2"
                maxLength="4"
                onChange={(handleChange, handleNumInput2)}
              />
              <TextBox
                type="text"
                className="phone3"
                name="phone3"
                maxLength="4"
                onChange={(handleChange, handleNumInput3)}
              />
            </div>
            <Button
              className={
                numValue.length + numValue2.length + numValue3.length >= 11
                  ? 'buttonOn'
                  : 'button'
              }
            >
              확인
            </Button>
          </div>
          <div className="row">
            <TextBox
              type="text"
              placeholder="인증번호를 입력해주세요"
              className="phoneCertify"
              onChange={handleChange}
            />
            <Button className="button">확인</Button>
          </div>
          <div className="row">
            <label className="birthTitle">생년월일</label>
            <div className="birth">
              <TextBox
                type="text"
                placeholder="년도) 1999"
                className="birthYear"
                name="birthYear"
                maxLength="4"
                onChange={handleChange}
              />
              <TextBox
                type="text"
                placeholder="월"
                className="birthMonth"
                name="birthMonth"
                maxLength="2"
                onChange={handleChange}
              />
              <TextBox
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

export default SignUp;
