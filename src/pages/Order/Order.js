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
    fetch('http://10.58.6.143:8000/orders', {
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

  const totalPrice = () => {
    let sum = 0;
    orderData.items.map(item => (sum = sum + item.price));
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
            {orderData.user_name}, {orderData.user_phone}
          </span>
        </div>
        <hr />
        <div className="user">
          <div className="userBox">
            <span>이름</span>
            <input
              type="text"
              className="inputBox"
              value={orderData.user_name}
            />
          </div>
          <div className="userBox">
            <span>번호</span>
            <input
              type="text"
              className="inputBox"
              value={orderData.user_phone}
            />
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
                placeholder={orderData.user_phone}
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

        <button type="button" className="paymentBtn">
          결제 하기
        </button>
      </form>
    </div>
  );
}

export default Order;
