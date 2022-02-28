import { Link } from 'react-router-dom';

import './Main.scss';

function Main() {
  return (
    <>
      <nav className="Nav">
        <Link to="/">CaKoo 로고</Link>
        <div>
          <Link to="/login">로그인</Link>
          <Link to="/sign-up">회원가입</Link>
          <Link to="/cart">장바구니</Link>
        </div>
      </nav>
      <main className="Main">
        <div className="banner">
          <p>케이쿠</p>
          <p>감성을 담은 케이크</p>
          <p>나를 위한 나만의 케이크</p>
        </div>
      </main>
      <footer className="Footer" />
    </>
  );
}

export default Main;
