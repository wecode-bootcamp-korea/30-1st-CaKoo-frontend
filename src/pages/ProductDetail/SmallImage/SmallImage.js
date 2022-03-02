import './SmallImage.scss';

function SmallImage({ data }) {
  return <img alt="상품 작게 보기" className="smallImage" src={data.image} />;
}

export default SmallImage;
