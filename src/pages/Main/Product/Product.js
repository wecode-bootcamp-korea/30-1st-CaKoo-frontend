import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ data }) {
  const {
    id,
    name,
    price,
    discount_rate,
    discount_price,
    description,
    sizes,
    thumbnail,
  } = data;
  return (
    <article className="product">
      <Link to={`/product-detail/${id}`}>
        <img
          alt="상품 미리보기(샘플)"
          className="productImage"
          src={thumbnail}
        />
      </Link>
      <span className="productInfo">{description}</span>
      <Link to={`/product-detail/${id}`} className="productName">
        {name}
      </Link>
      <p className="priceInfo">
        <span className="discountRate">{`${Math.round(
          (1 - discount_rate) * 100
        )}%`}</span>
        <span className="productPrice">{`${parseInt(price)}원`}</span>
        <span className="discountedPrice">{`${discount_price}원`}</span>
      </p>
      <p className="otherInfo">
        {sizes.map((size, index) => (
          <span key={index} className="productSize">
            {size}
          </span>
        ))}
        {/* <span className="productSize">mini</span>
        <span className="productSize">1호</span>
        <span className="productSize">2호</span>
        <span className="productSize">3호</span> */}
        <span className="delivery">무료배송</span>
      </p>
    </article>
  );
}

export default Product;
