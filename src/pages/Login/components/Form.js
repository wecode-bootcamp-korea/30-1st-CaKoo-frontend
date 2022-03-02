import n{ Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
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
    </div>
  )  
}

fetch ("https://") {
  method: "POST";
  body: JSON.stringy ({
    email: email
    password: password
  }),
})
  .then((response)) =>.json())
  .then((result) => console.log("결과:", result));
);

export default Login;
