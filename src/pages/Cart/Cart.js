import './Cart.scss';

function Cart() {
  return (
    <main className="cart">
      <header className="cartHeader">
        <h1 className="cartTitle">장바구니</h1>
      </header>
      <fieldset>
        <div className="cartInfoBox">
          <span className="productInfo">상품 정보</span>
          <span className="addProduct">추가 상품</span>
          <span className="totalPrice">합계 금액</span>
        </div>
        <div className="cartInfo">
          <span className="emptyCart">
            장바구니가 비어있습니다.
            <br />
            가장 맛있는 케익으로 행복을 채워보세요.
          </span>
          <button type="button" className="goShopping">
            쇼핑하러 가기
          </button>
        </div>
      </fieldset>
    </main>
  );
}

export default Cart;
