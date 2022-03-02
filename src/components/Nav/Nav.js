import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          alt="cakoo 로고"
          className="logo"
          src="img/sophie/cakoo_logo.png"
        />
      </Link>
      <ul className="navUser">
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/sign-up">회원가입</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
