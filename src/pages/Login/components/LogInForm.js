import n{ Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <div class="logInForm">
      <form className="logInInput">
        <input
          className="id"
          type="text"
          onChange={upDateIdValue}
          placeholder="아이디 (이메일)"
          name="userName"
        />
        <input
          required
          maxlength="20"
          className="id"
          type="text"
          onChange={upDateIdValue}
          placeholder="비밀번호"
          text="password"
        />
        <input className="checkBox" type="checked" />
        <button className="logInBtn">로그인</button>
      </form>
        <p>아이디 저장</p>
    </div>
  )  
}

fetch ("https://www.") {
  method: "POST";
  body: JSON.stringy ({
    email: email
    password: password
  }),
}(
  .then((response)) =>.json())
  .then((result) => console.log("결과:", result));
;

export default Login;
