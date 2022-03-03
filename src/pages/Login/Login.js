// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

// const onChangeBtn = () => {
//   const [idValue, setIdValue] = useState('');
//   const [pwValue, setPwValue] = useState('');

//   const updateIdValue = e => {
//     setIdValue(e);
//   };
//   setPwValue(e.target.value);

//   const condition = idValue.length > 0 && pwValue.length > 0;
// };

// function LogIn() {
//   const [isLogInOn, setLogInOn] = useState(false);
//   const [color, setColor] = useState('#');
//   const navigate = useNavigate();

//   const goToMain = () => {
//     setLogInOn(!setLogInOn);
//   };

//   const onChangeBtn = () => {
//     setColor('#f9cc33;');
//   };
// }
//   fetch ("https://www.") {
//   method: "POST";
//   body: JSON.stringy ({
//     email: email
//     password: password
//   }),
// }(
//   .then((response)) =>.json())
//   .then((result) => console.log("결과:", result));
// ;

function Login() {
  return (
    <div className="login">
      <h1>로그인</h1>
      <div class="logInFormBox">
        <form className="logInForm">
          <input
            className="logInInput"
            type="text"
            // onChange={upDateIdValue}
            placeholder="아이디 (이메일)"
            name="userName"
          />
          <input
            required
            maxlength="15"
            className="logInInput"
            type="text"
            // onChange={upDateIdValue}
            placeholder="비밀번호"
            text="password"
          />
          <div className="idSave">
            <input id="checkbox" className="checkBox" type="checked" />
            <label for="checkbox" className="circle" />
            <span>아이디 저장</span>
          </div>
          <button className="logInBtn">로그인</button>
        </form>
      </div>
      <div className="forGotContainer">
        <Link to="/" className="forgot" alt="아이디 찾기">
          아이디찾기
        </Link>
        <Link to="/" className="forgot" alt="비밀번호 찾기">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}

export default Login;
