import { useState } from 'react';
import './ProductAdd.scss';

function ProductAdd({ deleteProduct, name, data }) {
  const { size, price, quantity } = data;

  const [newCount, setNewCount] = useState(quantity);

  return (
    <div className="productAdd">
      <div className="productRow">
        <span>{`${name} ${size}`}</span>
        <span onClick="deleteProduct">x</span>
      </div>
      <div className="productRow">
        <span>{`${quantity}개`}</span>
        <span>{`${price * quantity}원`}</span>
      </div>
    </div>
  );
}

export default ProductAdd;
