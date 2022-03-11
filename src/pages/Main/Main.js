import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import API from '../../config';
import './Main.scss';

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState('recent');
  const [filterSize, setFilterSize] = useState([]);
  const [offset, setOffset] = useState(0);

  const URI = API.products;
  const filterSortUrl = !filterSize.length
    ? `?sort=${sort}`
    : `?sort=${sort}&size=${filterSize}`;

  const offsetUrl = `/${
    location.search.includes('&offset')
      ? location.search.split('&offset')[0]
      : location.search
  }&offset=${offset * 8}`;

  useEffect(() => {
    navigate(filterSortUrl);
  }, [sort, filterSize]);

  useEffect(() => {
    console.log(`${URI}${location.search}`);
    fetch(`${URI}${location.search}`)
      .then(res => res.json())
      .then(result => {
        console.log(location.search, result.lists);
        setProductList(result.lists);
      });
  }, [location.search]);

  useEffect(() => {
    if (offset > 0) {
      navigate(offsetUrl);
      fetch(`${URI}${location.search}`)
        .then(res => res.json())
        .then(result => {
          console.log(result.lists, location.search, offset * 8, productList);
          // console.log(productList.concat(result.lists));
          const newList = productList.concat(result.lists);
          setProductList(newList);
          // setProductList(prev => prev.concat(result.lists));
        });
    }
  }, [offset]);

  const handleCheck = event => {
    const size = event.target.name;
    if (filterSize.includes(size)) {
      setFilterSize(filterSize.filter(element => element !== size));
    } else {
      setFilterSize([...filterSize, size]);
    }
  };

  const addPage = () => {
    setOffset(prev => prev + 1);
  };

  if (!productList.length) {
    return null;
  }

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
        {productList.map((data, index) => (
          <Product key={index} data={data} />
        ))}
      </div>
      <button className="moreProduct" onClick={addPage}>
        더보기
      </button>
    </main>
  );
}

export default Main;
