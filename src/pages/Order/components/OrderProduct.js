import './OrderProduct.scss';

const OrderProduct = ({ data }) => {
  return (
    <div className="orderList">
      <img src={data.thumbnail} alt="biscuit cake" />
      <div className="box">
        <p className="item1">{data.product_name}</p>
        <p className="item2">사이즈 : {data.size}</p>
        <p className="item3">수량 : {data.quantity}개</p>
      </div>
      <span className="price">{data.price.toLocaleString('ko-KR')}원</span>
    </div>
  );
};

export default OrderProduct;
