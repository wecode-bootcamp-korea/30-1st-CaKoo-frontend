import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [token, setToken] = useState();

  const logout = () => {
    localStorage.removeItem('token');
    setToken(localStorage.getItem('token'));
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    // console.log(token);
  }, []);

  return (
    <nav className="nav">
      <Link to="/">
        <img alt="cakoo 로고" className="logo" src="images/cakoo_logo.png" />
      </Link>
      <ul className="navUser">
        {token ? (
          <>
            <li>
              <Link to="/" onClick={logout}>
                로그아웃
              </Link>
            </li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
