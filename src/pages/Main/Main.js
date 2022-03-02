import Banner from './Banner/Banner';
import Product from './Product/Product';

import './Main.scss';

function Main() {
  return (
    <main className="main">
      <Banner />
      <div className="productContainer">
        <Product />
      </div>
      <button className="moreProduct">더보기</button>
    </main>
  );
}

export default Main;
