import { useState } from 'react';
import './ProductAdd.scss';

function ProductAdd({ changeQuantity, deleteProduct, name, data }) {
  const { size_id, size, price, quantity } = data;

  const [newCount, setNewCount] = useState(quantity);

  function countDown() {
    setNewCount(prevCount => {
      if (prevCount > 1) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
    changeQuantity(size_id, size, price, newCount);
  }

  function countUp() {
    setNewCount(prevCount => {
      if (prevCount < 10) {
        return prevCount + 1;
      } else {
        return prevCount;
      }
    });
    changeQuantity(size_id, size, price, newCount);
  }

  return (
    <div className="productAdd">
      <div className="productRow">
        <span>{`${name} ${size}`}</span>
        <button className="deleteBtn" onClick={() => deleteProduct(size)}>
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
        <span>{`${price * newCount}원`}</span>
      </div>
    </div>
  );
}

export default ProductAdd;
