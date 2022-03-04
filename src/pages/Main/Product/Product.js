import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ id, name, price, rate, description, sizes, url }) {
  return (
    <article className="product">
      <Link to={`/product-detail/${id}`}>
        <img alt="상품 미리보기(샘플)" className="productImage" src={url} />
      </Link>
      <span className="productInfo">{description}</span>
      <Link to={`/product-detail/${id}`} className="productName">
        {name}
      </Link>
      <p className="priceInfo">
        <span className="discountRate">{`${parseInt((1 - rate) * 100)}%`}</span>
        <span className="productPrice">{`${parseInt(price)}원`}</span>
        <span className="discountedPrice">{`${price * rate}원`}</span>
      </p>
      <p className="otherInfo">
        {/* {sizes.map(size => (
          <span className="productSize">{size}</span>
        ))} */}
        <span className="productSize">1호</span>
        <span className="productSize">2호</span>
        <span className="delivery">무료배송</span>
      </p>
    </article>
  );
}

export default Product;
