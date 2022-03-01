import './Product.scss';

function Product() {
  return (
    <article className="Product">
      <img
        alt="상품 미리보기(샘플)"
        className="productImage"
        src="https://github.com/Pbang91/cakooimage/blob/main/images/macaroncake.jpeg?raw=true"
      />
      <h4 className="productName">마카롱 무화과 케이크</h4>
      <p className="priceInfo">
        <span className="discountRate">10%</span>
        <span className="productPrice">32,000원</span>
        <span className="discountedPrice">28,800원</span>
      </p>
      <p className="otherInfo">
        <span className="productSize">1호</span>
        <span className="productSize">2호</span>
        <span className="delivery">무료배송</span>
      </p>
    </article>
  );
}

export default Product;
