import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductAdd from './ProductAdd/ProductAdd';
import './ProductDetail.scss';

const ProductDetail = () => {
  // const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [addedProduct, setAddedProduct] = useState([]);

  // const params = useParams();
  // const { id } = params;
  // console.log(id);

  // useEffect(() => {
  //   fetch(`http://10.58.6.36:8000/products/${id}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result);
  //       setProduct(result.message);
  //     });
  // }, [id]);

  const countDown = () => {
    setCount(prevCount => {
      if (prevCount > 1) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
  };

  const countUp = () => {
    setCount(prevCount => {
      if (prevCount < 10) {
        return prevCount + 1;
      } else {
        return prevCount;
      }
    });
  };

  const handleSize = () => {
    setToggle(!toggle);
  };

  const changeSize = event => {
    const sizeAndPrice = event.target.innerText.split(' : ');
    const size = sizeAndPrice[0];
    const price = sizeAndPrice[1];
    const sizeId = event.target.id;

    if (addedProduct.map(product => product.size === size).includes(true)) {
      alert('이미 담은 상품입니다!');
    } else {
      setAddedProduct([
        ...addedProduct,
        { size_id: sizeId, size: size, price: price, quantity: count },
      ]);
    }
    setToggle(!toggle);
    setCount(1);
  };

  const deleteProduct = currentSize => {
    setAddedProduct(prevAdded =>
      prevAdded.filter(product => product.size !== currentSize)
    );
  };

  const changeQuantity = (sizeId, currentSize, currentPrice, newQuantity) => {
    setAddedProduct(prevAdded => {
      const removed = prevAdded.filter(product => product.size !== currentSize);
      return [
        ...removed,
        {
          size_id: sizeId,
          size: currentSize,
          price: currentPrice,
          quantity: newQuantity,
        },
      ];
    });
  };

  // const addCart = event => {
  //   event.preventDefault();
  //   fetch("http://10.58.6.174:8000/carts", {
  //     method: 'POST',
  //     body: addedProduct.map(product => {product_id: id, size_id: product.size_id, quantity: product.quantity}),
  //   });
  //   console.log(addedProduct);
  // };

  const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < addedProduct.length; i++) {
      const product = addedProduct[i];
      price = price + product.price * product.quantity;
    }
    return price;
  };

  // 서버 연결 안 됐을 때 쓸 가짜 데이터
  const id = 1;
  const product = {
    base_price: 30000,
    description: '특별한 날에 어울리는,',
    name: '딸기 쿠키 케이크',
    size_price: [
      { size_id: 1, size: 'mini', price: '30000.00' },
      { size_id: 2, size: '1호', price: '35000.00' },
      { size_id: 3, size: '2호', price: '40000.00' },
      { size_id: 4, size: '3호', price: '45000.00' },
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

  // if (!product.length) {
  //   return null;
  // }

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
              <img
                key={index}
                alt="상품 작게 보기"
                className="smallImage"
                src={image}
              />
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
            <div className="quantity">
              <span className="label">수량</span>
              <div className="counter">
                <button onClick={countDown} className="countBtn" type="button">
                  -
                </button>
                <span className="count">{count}</span>
                <button onClick={countUp} className="countBtn" type="button">
                  +
                </button>
              </div>
            </div>

            <div className="size">
              <span className="label">사이즈</span>
              <div className="sizeSelector">
                <button
                  className="sizeOption"
                  onClick={handleSize}
                  type="button"
                >
                  사이즈를 선택해주세요.
                </button>
                <div className={toggle ? 'show' : 'hide'}>
                  {size_price.map(({ size_id, size, price }) => (
                    <button
                      key={size_id}
                      id={size_id}
                      type="button"
                      className="sizeOption"
                      onClick={changeSize}
                    >{`${size} : ${Math.round(price * discount_rate)}`}</button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {addedProduct.map((product, index) => (
                <ProductAdd
                  key={index}
                  name={name}
                  data={product}
                  deleteProduct={deleteProduct}
                  changeQuantity={changeQuantity}
                />
              ))}
              <div className="priceContainer">
                <span>총 주문금액</span>
                <span className="total">{`${totalPrice().toLocaleString(
                  'ko-KR'
                )}원`}</span>
              </div>
            </div>
            {/* <button className="cartBtn" onClick={addCart}>
              장바구니
            </button> */}
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
};

export default ProductDetail;
