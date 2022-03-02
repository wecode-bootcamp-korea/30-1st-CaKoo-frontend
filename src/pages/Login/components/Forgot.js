import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
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
}

export default Login;
