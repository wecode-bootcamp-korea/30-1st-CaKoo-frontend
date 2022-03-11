import { useNavigate } from 'react-router-dom';
import './SignUpSuccess.scss';

function SignupSuccess() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="signupSuccess">
      <div className="box">
        <div className="signUpSuccessTitle">
          <span className="sentence">cakoo의 회원이 되신걸 환영합니다.</span>
        </div>
      </div>
      <div className="eventInfo">
        <span className="eventTitle">달달한 cakoo와 함께 행복하세요!</span>
        <span className="eventDetail">
          봄의 냄새가 나기 시작했어요. 봄의 달콤함을 맞이하러 가실까요?
        </span>
        <button className="myPageBtn" onClick={goToMain}>
          홈으로
        </button>
      </div>
    </div>
  );
}

export default SignupSuccess;
