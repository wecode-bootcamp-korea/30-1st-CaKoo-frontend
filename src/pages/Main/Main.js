import { useState, useEffect } from 'react';

import Banner from './Banner/Banner';
import Product from './Product/Product';

import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.222:8000/products/list', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result.lists);
        setProductList(result.lists);
      });
  }, []);

  // const fakeData = [
  //   {
  //     id: 1,
  //     name: '딸기 쿠키 케이크',
  //     description: '특별한 날에 어울리는,',
  //     discount_rate: 10,
  //     price: 32000,
  //     sizes: ['1호', '2호'],
  //     thumnail: '',
  //   },
  //   {
  //     id: 2,
  //     name: '딸기 쿠키 케이크',
  //     price: 32000,
  //     description: '특별한 날에 어울리는,',
  //   },
  // ];

  return (
    <main className="main">
      <Banner />
      <div className="productContainer">
        {productList.map(data => (
          <Product
            key={data.id}
            name={data.name}
            price={data.price}
            rate={data.discount_rate}
            description={data.description}
            url={data.thumbnail}
          />
        ))}
      </div>
      <button className="moreProduct">더보기</button>
    </main>
  );
}

export default Main;
