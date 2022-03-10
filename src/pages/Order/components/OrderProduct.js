import './OrderProduct.scss';

const OrderProduct = ({ data }) => {
  const {
    thumbnail,
    product_name,
    product_size,
    cart_quantity,
    product_price,
  } = data;

  return (
    <div className="orderList">
      <img src={thumbnail} alt="biscuit cake" />
      <div className="box">
        <p className="item1">{product_name}</p>
        <p className="item2">사이즈 : {product_size}</p>
        <p className="item3">수량 : {cart_quantity}개</p>
      </div>
      <span className="price">
        {(product_price * cart_quantity).toLocaleString('ko-KR')}원
      </span>
    </div>
  );
};

export default OrderProduct;
