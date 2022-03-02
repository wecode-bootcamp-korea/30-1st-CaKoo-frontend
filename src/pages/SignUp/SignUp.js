import './SignUp.scss';

// Component 전체는 PascalCase
// 그 밑은 camelCase

function signUp() {
  return (
    <main className="signUp">
      <header className="signUpHeader">
        <h1 className="signUpTitle">회원가입</h1>
      </header>
      <fieldset>
        <form className="signUpForm">
          <div className="row">
            <label>이메일(아이디)</label>
            <input type="text" placeholder="예) cakoo@cakoo.com" id="email" />
            <button type="button" disabled>
              중복확인
            </button>
          </div>
          <div className="row">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="영문, 숫자를 포함하여 8자리 - 20자리"
              id="password"
            />
          </div>
          <div className="row">
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              id="passwordCheck"
            />
          </div>
          <div className="row">
            <label>이름</label>
            <input type="text" placeholder="이름을 입력해주세요." id="name" />
          </div>
          <div className="row">
            <label>휴대폰 본인인증</label>
            <div id="phone">
              <input type="text" id="phone1" />
              <input type="text" id="phone2" />
              <input type="text" id="phone3" />
            </div>
            <button type="button" disabled>
              인증번호 받기
            </button>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="인증번호를 입력해주세요."
              id="phoneCertify"
            />
            <button type="button" disabled>
              확인
            </button>
          </div>
          <div className="row">
            <label className="birthTitle">생년월일</label>
            <div className="birth">
              <input type="text" placeholder="년도) 1999" id="birthYear" />
              <input type="text" placeholder="월" id="birthMonth" />
              <input type="text" placeholder="일" id="birthDay" />
            </div>
          </div>
          <hr />
          <div className="termConditionBox">
            <span className="termConditionAgree">이용약관 동의</span>
            <div>
              <ul className="agreeList">
                <li className="list">
                  <label className="conditionTrue">
                    <span>모두 동의합니다.</span>
                    <input type="checkbox" />
                    <span className="boxIcon" />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      이용약관 동의
                      <b>(필수)</b>
                    </span>
                    <input type="checkbox" />
                    <span className="boxIcon" />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      개인정보 수집, 이용동의
                      <b>(필수)</b>
                    </span>
                    <input type="checkbox" />
                    <span className="boxIcon" />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>
                      개인정보 이용 동의
                      <b>(필수)</b>
                    </span>
                    <input type="checkbox" />
                    <span className="boxIcon" />
                  </label>
                </li>
                <li className="list">
                  <label className="conditionTrue">
                    <span>이벤트, 혜택정보 수신 동의 (선택)</span>
                    <input type="checkbox" />
                    <span className="boxIcon" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="agreeTerms">
            <button type="button" className="btn">
              이용약관 보기
            </button>
            <button type="button" className="btn">
              개인정보 처리방침 보기
            </button>
          </div>
          <button type="button">회원가입</button>
        </form>
      </fieldset>
    </main>
  );
}

export default signUp;
