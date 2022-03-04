import './Product.scss';

function Product() {
  return (
    <div className="product">
      <div className="productList">
        <div className="productInfoBox">
          <input type="checkbox" />
          <img src="#" alt="" />
          <div className="productInfo">
            <span className="productName">오레오 케익</span>
            <span className="arriveDate">수령일 : 2022-03-08</span>
            <span className="productPrice">37,900원</span>
            <div className="productCount">
              <button className="decrease">-</button>
              <span className="productQuantity">1</span>
              <button className="increase">+</button>
            </div>
          </div>
          <div className="addProduct">
            <span className="addProductInfo">편지 2,500원</span>
          </div>
          <div className="totalPrice">
            <span className="totalPriceInfo">40,400원</span>
            <div className="deliveryInfo">무료배송</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
