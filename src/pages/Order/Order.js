import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react/-router-dom';
import './Order.scss';
import './components/OrderProduct';
import OrderProduct from './components/OrderProduct';
// import OrderInputBox from './components/OrderInputBox';

function Order() {
  // const navigate = useNavigate();
  const [orderData, setOrderData] = useState({});
  // const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://10.58.6.142:8000/orders', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.w37glfpHvbz3_yLLuWVxpdDppB9wTrfIKHKnll6fG1I',
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.message);
        setOrderData(result.message[0]);
      });
  }, []);

  if (!orderData.order_number) {
    return null;
  }

  return (
    <div className="order">
      <h1>주문/결제</h1>

      <div>
        <h2>주문내역 확인</h2>
        <hr />
        {orderData.items.map(item => {
          return (
            <OrderProduct data={item} key={item.product_name + item.size} />
          );
        })}
      </div>

      <div className="userNameInfo">
        <div className="userNameInfoBox">
          <h2>주문자 정보</h2>
          <span>
            {orderData.sender_name}, {orderData.sender_phone}
          </span>
        </div>
        <hr />
        <form className="user">
          <div className="userBox">
            <span>이름</span>
            <input
              type="text"
              className="userInputBox"
              name="name"
              value={orderData.sender_name}
            />
          </div>
          <div className="userBox">
            <span>번호</span>
            <input
              type="text"
              className="phoneInputBox"
              name="userphone"
              value={orderData.sender_phone}
            />
          </div>
        </form>
      </div>
      <form className="form">
        <div className="userForm">
          <h2>발신인 정보</h2>
          <hr />
          <input
            className="orderInput"
            placeholder={orderData.sender_name}
            name="username"
          />
        </div>
        <div className="orderDetail">
          <h2>배송지 정보</h2>
          <hr />
          <input
            className="orderInput"
            placeholder="받는분 이름"
            name="recipient name"
          />
          <input
            className="orderInput"
            placeholder="받는분 연락쳐"
            name="recipient phone"
          />
          <input className="orderInput" placeholder="받는분 주소" />
        </div>
        <div className="orderPayment">
          <h3>최종 결제 금액</h3>
          <hr />
        </div>
        <button type="button" name="paymentBtn">
          결제 하기
        </button>
      </form>
    </div>
  );
}

export default Order;
