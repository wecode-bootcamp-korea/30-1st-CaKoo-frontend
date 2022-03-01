import Product from './Product/Product';

import './Main.scss';

function Main() {
  return (
    <main className="Main">
      <div className="banner">
        <p className="bannerTitle">케이쿠</p>
        <p>감성을 담은 케이크</p>
        <p>나를 위한 나만의 케이크</p>
      </div>
      <div className="productContainer">
        <Product />
      </div>
      <button className="moreProduct">더보기</button>
    </main>
  );
}

export default Main;
