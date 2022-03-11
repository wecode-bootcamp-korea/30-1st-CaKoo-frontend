import { useNavigate } from 'react-router-dom';
import './BuySuccess.scss';

function BuySuccess() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="buySuccess">
      <div className="box">
        <div className="buySuccessTitle">
          <span className="sentence">주문이 완료되었습니다.</span>
        </div>
      </div>
      <div className="eventInfo">
        <span className="eventTitle">달달한 cakoo가 준비중입니다!</span>
        <span className="eventDetail" />
        <button className="myPageBtn" onClick={goToMain}>
          홈으로
        </button>
      </div>
    </div>
  );
}

export default BuySuccess;
