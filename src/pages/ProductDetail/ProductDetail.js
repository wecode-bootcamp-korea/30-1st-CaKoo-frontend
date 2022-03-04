import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallImage from './SmallImage/SmallImage';

import './ProductDetail.scss';

function ProductDetail({ match }) {
  const [product, setProduct] = useState({});

  // const { id } = match.params;
  // console.log(id);

  const id = 23;

  useEffect(() => {
    fetch(`http://10.58.3.222:8000/products/product/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        setProduct(result);
      });
  }, []);

  //   const fakeData = {
  //     id: 1,
  //     name: '딸기 쿠키 케이크',
  //     price: 32000,
  //     description: '특별한 날에 어울리는,',
  //     image: '/images/strawberry_biscuit_cake.jpeg',
  //   };

  return (
    <main className="productDetail">
      <div className="category">
        <Link to="/">Home</Link>
        <span>{` > 케이크 > ${product.name}`}</span>
      </div>

      <div className="wrapper">
        <div className="imageContainer">
          <img
            alt="상품 이미지 크게 보기"
            className="mainImage"
            src={product.image}
          />
          <div className="smallImages">
            <SmallImage data={product} />
            <SmallImage data={product} />
            <SmallImage data={product} />
            <SmallImage data={product} />
            <SmallImage data={product} />
          </div>
        </div>

        <div className="order">
          <h1>{product.name}</h1>
          <h3>{`${product.price}원`}</h3>
          <hr />
          <hr />
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
