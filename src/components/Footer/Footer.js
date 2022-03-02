import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footerColumn">
        <div className="footerRow">
          <div className="snsIcon">
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="img/sophie/cakoo_facebook_logo_white.png"
            />
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="img/sophie/cakoo_insta_logo_white.png"
            />
            <img
              alt="인스타 아이콘"
              className="snsLogo"
              src="img/sophie/cakoo_youtube_logo_white.png"
            />
          </div>
          <p className="callcenter">
            <span className="bigFont">케이쿠 고객센터 1997-1122 </span>
            <span className="smallFont">
              (평일 10:00-13:00, 14:00-18:00 / 주말 & 공휴일 제외)
            </span>
            <button className="callcenterBtn">꾸까 고객센터 ></button>
          </p>
        </div>
        <Link to="/">
          <img
            alt="cakoo 로고 화이트"
            className="logo"
            src="img/sophie/cakoo_logo_white.png"
          />
        </Link>
      </div>

      <hr />

      <div className="footerColumn footerBottom">
        <div>
          <p>
            상호명: 케이쿠(cakoo) | 사업자 등록번호: 123-45-67890 | 대표자:
            위코드
          </p>
          <p>
            소재지: 서울시 강남구 테헤란로 10 cakoo | 기업공시 |
            통신판매신고번호 2022-서울위코드-0311
          </p>
          <p>© 2022 cakoo, inc. All rights reserved.</p>
        </div>
        <p>
          <span>이용약관</span>
          <span className="margin">개인정보 처리방침</span>
          <span className="margin">제휴안내</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
