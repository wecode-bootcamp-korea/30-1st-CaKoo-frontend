import './Product.scss';

function Product({ data }) {
  const { product_price, product_name, product_size, cart_quantity } = data;

  return (
    <div className="product">
      <div className="productList">
        <div className="productInfoBox">
          <div className="productInfo">
            <img
              className="productImg"
              src="/images/strawberry_biscuit_cake.jpeg"
              alt=""
            />
            <div className="productDetail">
              <span className="productName">{product_name}</span>
              <span className="productSize">사이즈 : {product_size}</span>
              <span className="productPrice">
                {product_price.toLocaleString('ko-KR')}원
              </span>
              <div className="productCount">
                <button className="decrease">-</button>
                <span className="productQuantity">{cart_quantity}</span>
                <button className="increase">+</button>
              </div>
            </div>
          </div>
          <div className="totalPrice">
            <span className="totalPriceInfo">
              {(product_price * cart_quantity).toLocaleString('ko-KR')}원
            </span>
            <div className="deliveryInfo">무료배송</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
