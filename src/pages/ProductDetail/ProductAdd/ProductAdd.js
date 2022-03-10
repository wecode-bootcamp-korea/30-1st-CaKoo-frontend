import { useEffect, useState } from 'react';
import './ProductAdd.scss';

const ProductAdd = ({ changeQuantity, deleteProduct, name, data }) => {
  const { size_id, size, price, quantity } = data;

  const [newCount, setNewCount] = useState(quantity);

  const countDown = () => {
    setNewCount(prevCount => {
      if (prevCount > 1) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
  };

  const countUp = () => {
    setNewCount(prevCount => {
      if (prevCount < 10) {
        return prevCount + 1;
      } else {
        return prevCount;
      }
    });
  };

  useEffect(() => {
    changeQuantity(size_id, size, price, newCount);
  }, [newCount]);

  return (
    <div className="productAdd">
      <div className="productRow">
        <span>{`${name} ${size}`}</span>
        <button
          className="deleteBtn"
          onClick={() => deleteProduct(size)}
          type="button"
        >
          X
        </button>
      </div>
      <div className="productRow">
        <div>
          <button onClick={countDown} className="newCountBtn" type="button">
            -
          </button>
          <span className="newCount">{newCount}</span>
          <button onClick={countUp} className="newCountBtn" type="button">
            +
          </button>
        </div>
        <span>{`${(price * newCount).toLocaleString('ko-KR')}원`}</span>
      </div>
    </div>
  );
};

export default ProductAdd;
