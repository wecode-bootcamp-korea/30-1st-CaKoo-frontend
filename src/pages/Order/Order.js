import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderProduct from './components/OrderProduct';
import API from '../../config';
import './Order.scss';

function Order() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(API.carts, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setOrderData(result.result);
      });
  }, []);

  const handleFetch = () => {
    fetch(API.orders, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        cart_ids: [35, 38],
        address: 'address',
        recipient_name: 'name',
        recipient_phone: 'phone',
      }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        alert('결제 완료');
        navigate('/buy-success');
      });
  };

  const totalPrice = () => {
    let sum = 0;
    orderData.data.map(
      item => (sum = sum + item.product_price * item.cart_quantity)
    );
    return sum;
  };

  if (!orderData.user_name) {
    return null;
  }

  return (
    <div className="order">
      <h1>주문/결제</h1>

      <div className="userNameInfo">
        <h2>주문내역 확인</h2>
        <hr />
        {orderData.data.map(item => (
          <OrderProduct data={item} key={item.cart_id} />
        ))}
      </div>

      <div className="userNameInfo">
        <div className="userNameInfoBox">
          <h2>주문자 정보</h2>
          <span>
            {orderData.user_name} {orderData.user_phone_number}
          </span>
        </div>
        <hr />
        <div className="user">
          <div className="userBox">
            <span>이름</span>
            <div className="inputBox">{orderData.user_name}</div>
          </div>
          <div className="userBox">
            <span>번호</span>
            <div className="inputBox">{orderData.user_phone_number}</div>
          </div>
        </div>
      </div>

      <form className="orderForm">
        <div className="userNameInfo">
          <h2>발신인 정보</h2>
          <hr />
          <div className="user">
            <div className="userBox">
              <span>이름</span>
              <input
                className="inputBox orderInput"
                placeholder={orderData.user_name}
                name="username"
              />
            </div>
          </div>
        </div>

        <div className="userNameInfo">
          <h2>배송지 정보</h2>
          <hr />
          <div className="user">
            <div className="userBox">
              <span>받는분 이름</span>
              <input
                className="inputBox orderInput"
                placeholder={orderData.user_name}
                name="recipient name"
              />
            </div>
            <div className="userBox">
              <span>받는분 연락처</span>
              <input
                className="inputBox orderInput"
                placeholder={orderData.user_phone_number}
                name="recipient phone"
              />
            </div>
            <div className="userBox">
              <span>받는분 주소</span>
              <input
                className="inputBox orderInput"
                placeholder="주소를 입력해주세요."
              />
            </div>
          </div>
        </div>

        <div className="userNameInfo">
          <h2>최종 결제 금액</h2>
          <hr />
          <div>
            <span className="totalPrice">총 상품 금액</span>
            <span className="totalPrice">
              {totalPrice().toLocaleString('ko-KR')} 원
            </span>
          </div>
        </div>

        <button type="button" className="paymentBtn" onClick={handleFetch}>
          결제 하기
        </button>
      </form>
    </div>
  );
}

export default Order;
