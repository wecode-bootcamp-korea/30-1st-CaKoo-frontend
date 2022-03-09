import './OrderProduct.scss';

const OrderProduct = ({ data }) => {
  const { thumbnail, product_name, size, quantity, price } = data;

  return (
    <div className="orderList">
      <img src={thumbnail} alt="biscuit cake" />
      <div className="box">
        <p className="item1">{product_name}</p>
        <p className="item2">사이즈 : {size}</p>
        <p className="item3">수량 : {quantity}개</p>
      </div>
      <span className="price">{price.toLocaleString('ko-KR')}원</span>
    </div>
  );
};

export default OrderProduct;
