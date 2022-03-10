import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductAdd from './ProductAdd/ProductAdd';
import API from '../../config';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [addedProduct, setAddedProduct] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`${API.products}/${id}`)
      .then(res => res.json())
      .then(result => {
        setProduct(result.message);
      });
  }, []);

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
    // prevAdded => {
    //   const index = prevAdded.findIndex(ele => ele.size === currentSize);

    //   prevAdded[index] = newEle;
    //   // console.log(prevAdded);
    //   return prevAdded;
    // }
    const newEle = {
      size_id: sizeId,
      size: currentSize,
      price: currentPrice,
      quantity: newQuantity,
    };

    const targetIndex = addedProduct.findIndex(ele => ele.size === currentSize);
    const newArr = addedProduct.slice();
    newArr[targetIndex] = newEle;

    setAddedProduct(newArr);
  };

  const addCart = event => {
    event.preventDefault();
    if (!token) {
      alert('로그인해주세요.');
      navigate('/login');
    } else {
      fetch(API.carts, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify(
          addedProduct.map(product => {
            return {
              product_id: id,
              size_id: product.size_id,
              quantity: product.quantity,
            };
          })
        ),
      }).then(() => {
        alert('장바구니에 상품이 담겼습니다.');
        setAddedProduct([]);
      });
    }
  };

  const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < addedProduct.length; i++) {
      const product = addedProduct[i];
      price = price + product.price * product.quantity;
    }
    return price;
  };

  useEffect(() => {}, [addedProduct]);

  const {
    base_price,
    description,
    discount_rate,
    information_images,
    name,
    product_images,
    sizes,
  } = product;

  const rate = 1 - discount_rate;

  const token = localStorage.getItem('token');

  if (!product.name) {
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
              <img
                key={index}
                alt="상품 작게 보기"
                className="smallImage"
                src={image}
              />
            ))}
          </div>
        </div>

        <div className="orderForm">
          <p className="description">{description}</p>
          <h1 className="productName">{name}</h1>
          <p className="priceInfo">
            <span className="discountRate">{Math.round(rate * 100)}%</span>
            <del className="listPrice">
              {parseInt(base_price).toLocaleString('ko-KR')}원
            </del>
            <span className="realPrice">{`${Math.round(
              base_price * discount_rate
            ).toLocaleString('ko-KR')}원`}</span>
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
                  {sizes.map(({ size_id, size, price }) => (
                    <button
                      key={size_id}
                      id={size_id}
                      type="button"
                      className="sizeOption"
                      onClick={changeSize}
                    >
                      {`${size} : ${Math.round(price * discount_rate)}`}
                    </button>
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
            <button className="cartBtn" onClick={addCart}>
              장바구니
            </button>
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
