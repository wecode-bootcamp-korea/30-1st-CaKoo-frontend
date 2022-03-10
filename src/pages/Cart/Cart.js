import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import BuyConfirm from './BuyConfirm';
import Button from './Button';
import './Cart.scss';

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    fetch('http://10.58.6.143:8000/carts', {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartProduct(result.message);
      });
  }, []);

  // const mockData = [
  //   {
  //     cart_id: 1,
  //     product_name: '딸기 비스킷 케이크',
  //     product_size: 'mini',
  //     product_price: 49800,
  //     cart_quantity: 3,
  //     thumbnail: '/images/strawberry_biscuit_cake.jpeg',
  //   },
  //   {
  //     cart_id: 2,
  //     product_name: '블루베리 비스킷 케이크',
  //     product_size: '1호',
  //     product_price: 59800,
  //     cart_quantity: 3,
  //     thumbnail: '/images/strawberry_biscuit_cake.jpeg',
  //   },
  //   {
  //     cart_id: 3,
  //     product_name: '바닐라 비스킷 케이크',
  //     product_size: '2호',
  //     product_price: 79800,
  //     cart_quantity: 3,
  //     thumbnail: '/images/strawberry_biscuit_cake.jpeg',
  //   },
  // ];

  // useEffect(() => {
  //   setCartProduct(mockData);
  // }, []);

  const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < cartProduct.length; i++) {
      const product = cartProduct[i];
      price = price + product.product_price * product.cart_quantity;
    }
    return price;
  };

  const deleteCart = id => {
    setCartProduct(cartProduct =>
      cartProduct.filter(product => product.cart_id !== id)
    );
    fetch(`http://10.58.6.143:8000/carts/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
  };

  return (
    <main className="cart">
      <header className="cartHeader">
        <h1 className="cartTitle">장바구니</h1>
      </header>
      <div className="cartContainer">
        <div className="cartInfoBox">
          <span className="productInfoTitle">상품 정보</span>
          <span className="totalPriceTitle">합계 금액</span>
        </div>
        <div className="cartInfo">
          {cartProduct.length ? (
            <>
              {cartProduct.map(el => {
                return (
                  <Product data={el} key={el.cart_id} deleteCart={deleteCart} />
                );
              })}
              <BuyConfirm totalPrice={totalPrice().toLocaleString('ko-KR')} />
              <Link to="/order">
                <Button className="button" value="구매하기" />
              </Link>
            </>
          ) : (
            <>
              <div className="emptyCart">
                <p className="emptyCartMsg">장바구니가 비어있습니다.</p>
                <p className="emptyCartMsg">
                  가장 맛있는 케익으로 행복을 채워보세요.
                </p>
              </div>
              <Link to="/">
                <Button className="button" value="쇼핑하러 가기" />
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
