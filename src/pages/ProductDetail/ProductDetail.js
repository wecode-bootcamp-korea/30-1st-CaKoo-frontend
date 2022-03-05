// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallImage from './SmallImage/SmallImage';
import './ProductDetail.scss';
import { useState } from 'react';

function ProductDetail({ match }) {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  function countDown() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function countUp() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleSize() {
    setToggle(!toggle);
  }

  // const [product, setProduct] = useState({});

  // // 라우터 수정 후 실행할 코드
  // // const { id } = match.params;
  // // console.log(id);

  // 임시 id 변수
  // const id = 1;

  // useEffect(() => {
  //   fetch(`http://10.58.6.174:8000/products/${id}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       // console.log(result);
  //       setProduct(result.message);
  //     });
  // }, []);

  // 서버 연결 안 됐을 때 쓸 가짜 데이터
  const product = {
    base_price: 30000,
    description: '특별한 날에 어울리는,',
    name: '딸기 쿠키 케이크',
    size_price: [
      {
        size: 'mini',
        price: '30000.00',
      },
      {
        size: '1호',
        price: '35000.00',
      },
      {
        size: '2호',
        price: '40000.00',
      },
      {
        size: '3호',
        price: '45000.00',
      },
    ],
    discount_rate: '0.80',
    product_images: [
      '/images/strawberry_biscuit_cake.jpeg',
      'https://github.com/Pbang91/cakooimage/blob/main/images/keep/%EA%B3%BC%EC%9D%BC%ED%83%80%EB%A5%B4%ED%8A%B8%EC%BC%80%EC%9D%B4%ED%81%AC.jpeg?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3/%E1%84%80%E1%85%B5%E1%84%90%E1%85%A1/%E1%84%80%E1%85%AA%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%A8.png?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3/%E1%84%80%E1%85%B5%E1%84%90%E1%85%A1/%E1%84%87%E1%85%A1%E1%84%82%E1%85%A1%E1%84%82%E1%85%A1%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%A8.png?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3/%E1%84%89%E1%85%A2%E1%86%BC%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7/2.png?raw=true',
    ],
    information_images: [
      'https://github.com/Pbang91/cakooimage/blob/main/images/info_images/info1.jpeg?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/info_images/info2.jpeg?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/info_images/info3.jpeg?raw=true',
      'https://github.com/Pbang91/cakooimage/blob/main/images/info_images/info4.jpeg?raw=true',
    ],
  };

  const {
    base_price,
    description,
    discount_rate,
    information_images,
    name,
    product_images,
    size_price,
  } = product;

  const rate = 1 - discount_rate;

  if (!product) {
    return null;
  }

  return (
    <main className="productDetail">
      <div className="category">
        <Link to="/">Home</Link>
        <span>{` > 케이크 > ${name}`}</span>
      </div>

      <div className="wrapper">
        <div className="imageContainer">
          <img
            alt="상품 이미지 크게 보기"
            className="mainImage"
            src={product_images[0]}
          />
          <div className="smallImages">
            {product_images.map((image, index) => (
              <SmallImage key={index} img={image} />
            ))}
          </div>
        </div>

        <div className="order">
          <p className="description">{description}</p>
          <h1 className="productName">{name}</h1>
          <p className="priceInfo">
            <span className="discountRate">{`${Math.round(rate * 100)}%`}</span>
            <del className="listPrice">{`${base_price}원`}</del>
            <span className="realPrice">{`${Math.round(
              base_price * discount_rate
            )}원`}</span>
          </p>
          <hr />
          <p className="deliveryInfo">
            3만원 이상 구매 시, <span className="mint">무료배송!</span>
          </p>
          <hr />
          <form>
            <div className="size">
              <span className="label">사이즈</span>
              <div className="sizeSelector">
                <button onClick={handleSize} type="button">
                  사이즈를 선택해주세요.
                </button>
                <div className={toggle ? 'show' : 'hide'}>
                  {size_price.map(size => (
                    <button key={size.size} type="button">{`${
                      size.size
                    } : ${Math.round(size.price)}`}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="quantity">
              <span className="label">수량</span>
              <div className="counter">
                <button onClick={countDown} className="sizeBtn" type="button">
                  -
                </button>
                <span className="count">{count}</span>
                <button onClick={countUp} className="sizeBtn" type="button">
                  +
                </button>
              </div>
            </div>
            <button>장바구니</button>
          </form>
        </div>
      </div>

      <div>
        {information_images.map((image, index) => (
          <img alt="상품 상세 컷" key={index} src={image} />
        ))}
      </div>
    </main>
  );
}

export default ProductDetail;
