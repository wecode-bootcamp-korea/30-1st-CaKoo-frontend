import './BuyConfirm.scss';

function BuyConfirm() {
  return (
    <div className="buyConfirm">
      <div className="buyConfirmBox">
        <div className="buyConfirmBoxDetail">
          <h2 className="buyConfirmTitle">ⓘ 구매 전 확인해주세요.</h2>
          <span className="buyConfirmDetail">
            - 구매 금액 합산 30,000원 이상일 경우, 배송비는 무료입니다.
          </span>
        </div>
      </div>
      <div className="priceDetailBox">
        <div className="priceDetail">
          <span className="orderTotal">
            총 주문금액 <b>0원</b>
          </span>
          +
          <span className="deliverPrice">
            배송비 <b>0원</b>
          </span>
          =<span className="totalAmount">총 결제금액 0원</span>
        </div>
      </div>
    </div>
  );
}

export default BuyConfirm;
