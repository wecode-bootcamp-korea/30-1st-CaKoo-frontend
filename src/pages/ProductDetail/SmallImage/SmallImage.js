import './SmallImage.scss';

function SmallImage({ img }) {
  return <img alt="상품 작게 보기" className="smallImage" src={img} />;
}

export default SmallImage;
