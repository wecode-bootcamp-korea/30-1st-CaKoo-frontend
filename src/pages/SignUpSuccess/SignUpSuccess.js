import { useNavigate } from 'react-router-dom';
import './SignUpSuccess.scss';

function SignUpSuccess() {
  const navigate = useNavigate();
  const goToMain = e => {
    navigate('/');
  };

  return (
    <div className="signUpSuccess">
      <div className="box">
        <div className="signUpSuccessTitle">
          <span className="name">김준영님,</span>
          <span className="sentence">cakoo의 회원이 되신걸 환영합니다.</span>
        </div>
      </div>
      <div className="eventInfo">
        <span className="eventTitle">아름다운 꽃들과 함께 행복하세요!</span>
        <span className="eventDetail">
          봄의 냄새가 나기 시작했어요. 봄의 따듯함을 맞이하러 가실까요?
        </span>
        <button className="myPageBtn" onClick={goToMain} type="submit">
          홈으로
        </button>
      </div>
    </div>
  );
}

export default SignUpSuccess;
