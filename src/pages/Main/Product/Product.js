import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ name, price, description }) {
  return (
    <article className="product">
      <Link to="/product-detail">
        <img
          alt="상품 미리보기(샘플)"
          className="productImage"
          src="/img/sophie/strawberry_biscuit_cake.jpeg"
        />
      </Link>
      <span className="productInfo">{description}</span>
      <Link to="/product-detail" className="productName">
        {name}
      </Link>
      <p className="priceInfo">
        <span className="discountRate">10%</span>
        <span className="productPrice">{`${price}원`}</span>
        <span className="discountedPrice">{`${price * 0.9}원`}</span>
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
