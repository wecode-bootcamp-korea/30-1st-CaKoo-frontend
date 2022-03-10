import { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import API from '../../config';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState('');
  const [filterSize, setFilterSize] = useState([]);
  const [offset, setOffset] = useState(0);

  const baseUri = API.products;
  const uri = sort
    ? filterSize.length
      ? `?${baseUri}sort=${sort}&size=${filterSize.join()}`
      : `?${baseUri}sort=${sort}`
    : filterSize.length
    ? `?${baseUri}size=${filterSize.join()}`
    : `${baseUri}?`;

  useEffect(() => {
    fetch(`${uri}&offset=${offset}&limit=${(offset + 1) * 8}`)
      .then(res => res.json())
      .then(result => {
        // console.log(result.lists);
        setProductList(result.lists);
      });
  }, [sort, filterSize, offset]);

  // useEffect(() => {
  //   offset > 0 &&
  //     fetch(`${uri}&offset=${offset}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         console.log(result.lists);
  //         setProductList(prev => prev.concat(result.lists));
  //       });
  // }, [offset]);

  function handleCheck(event) {
    const size = event.target.name;
    if (filterSize.includes(size)) {
      setFilterSize(filterSize.filter(element => element !== size));
    } else {
      setFilterSize([...filterSize, size]);
    }
  }

  function addPage() {
    setOffset(prev => prev + 1);
  }

  // const productList = [
  //   {
  //     id: 1,
  //     name: '딸기 쿠키 케이크',
  //     description: '특별한 날에 어울리는,',
  //     discount_rate: 0.1,
  //     price: 32000,
  //     sizes: ['1호', '2호'],
  //     thumnail: '/images/strawberry_biscuit_cake.jpeg',
  //   },
  //   {
  //     id: 2,
  //     name: '딸기 쿠키 케이크',
  //     description: '특별한 날에 어울리는,',
  //     discount_rate: 0.1,
  //     price: 32000,
  //     sizes: ['1호', '2호'],
  //     thumnail: '/images/strawberry_biscuit_cake.jpeg',
  //   },
  // ];

  return (
    <main className="main">
      <Banner />
      <div className="filterBar">
        <form className="filterForm">
          <label>
            <input type="checkbox" name="1" onChange={handleCheck} />
            mini
          </label>
          <label>
            <input type="checkbox" name="2" onChange={handleCheck} />
            1호
          </label>
          <label>
            <input type="checkbox" name="3" onChange={handleCheck} />
            2호
          </label>
          <label>
            <input type="checkbox" name="4" onChange={handleCheck} />
            3호
          </label>
        </form>
        <div>
          <button
            type="button"
            onClick={() => {
              setSort('expensive');
            }}
          >
            가격 높은순
          </button>
          <button
            type="button"
            onClick={() => {
              setSort('cheap');
            }}
          >
            가격 낮은순
          </button>
          <button
            type="button"
            onClick={() => {
              setSort('recent');
            }}
          >
            신상품
          </button>
          <button
            type="button"
            onClick={() => {
              setSort('old');
            }}
          >
            오래된 순
          </button>
        </div>
      </div>

      <div className="productContainer">
        {productList.map(data => (
          <Product key={data.id} data={data} />
        ))}
      </div>
      <button className="moreProduct" onClick={addPage}>
        더보기
      </button>
    </main>
  );
}

export default Main;
