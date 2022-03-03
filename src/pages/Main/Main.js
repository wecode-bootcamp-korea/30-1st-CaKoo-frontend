// import { useState, useEffect } from 'react';

import Banner from './Banner/Banner';
import Product from './Product/Product';

import './Main.scss';

function Main() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   fetch('api', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(result => setProductList(result));
  // }, []);

  const fakeData = [
    {
      id: 1,
      name: '딸기 쿠키 케이크',
      price: 32000,
      description: '특별한 날에 어울리는,',
      size: ['1호', '2호'],
      rate: 10,
    },
    {
      id: 2,
      name: '딸기 쿠키 케이크',
      price: 32000,
      description: '특별한 날에 어울리는,',
    },
    {
      id: 3,
      name: '딸기 쿠키 케이크',
      price: 32000,
      description: '특별한 날에 어울리는,',
    },
    {
      id: 4,
      name: '딸기 쿠키 케이크',
      price: 32000,
      description: '특별한 날에 어울리는,',
    },
    {
      id: 5,
      name: '딸기 쿠키 케이크',
      price: 32000,
      description: '특별한 날에 어울리는,',
    },
  ];

  return (
    <main className="main">
      <Banner />
      <div className="productContainer">
        {fakeData.map(data => (
          <Product
            key={data.id}
            name={data.name}
            price={data.price}
            description={data.description}
          />
        ))}
      </div>
      <button className="moreProduct">더보기</button>
    </main>
  );
}

export default Main;
