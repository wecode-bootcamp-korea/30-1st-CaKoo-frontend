import { Link } from 'react-router-dom';
import SmallImage from './SmallImage/SmallImage';

import './ProductDetail.scss';

function ProductDetail() {
  const fakeData = {
    id: 1,
    name: '딸기 쿠키 케이크',
    price: 32000,
    description: '특별한 날에 어울리는,',
    image: '/images/strawberry_biscuit_cake.jpeg',
  };

  return (
    <main className="productDetail">
      <div className="category">
        <Link to="/">Home</Link>
        <span>{` > 케이크 > ${fakeData.name}`}</span>
      </div>

      <div className="wrapper">
        <div className="imageContainer">
          <img
            alt="상품 이미지 크게 보기"
            className="mainImage"
            src={fakeData.image}
          />
          <div className="smallImages">
            <SmallImage data={fakeData} />
            <SmallImage data={fakeData} />
            <SmallImage data={fakeData} />
            <SmallImage data={fakeData} />
            <SmallImage data={fakeData} />
          </div>
        </div>

        <div className="order">
          <h1>{fakeData.name}</h1>
          <h3>{`${fakeData.price}원`}</h3>
          <hr />
          <hr />
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
