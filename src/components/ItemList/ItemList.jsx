import React, { useState, useEffect } from 'react';
import Item from './Item';
import './Item.css'
import Loader from '../Loader';

const ItemList = ({ products}) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 250)});


  return (
    <div>
      {showLoader ? (
        <div> {<Loader />} </div>
            ) : (
          <ul className='container'>
            {products.map((product) => (
              <Item key={product.ID} product={product} />
            ))}
          </ul>
        )}
    </div>
  );
};

export default ItemList;
