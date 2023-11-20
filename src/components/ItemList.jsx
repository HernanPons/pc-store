import React, { useState, useEffect } from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import Item from './Item';
import './Item.css'
import Loader from './Loader';

const ItemList = ({ products, categoria, id }) => {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 250)});


  return (
    <div>
      {showLoader ? (
              <div>
                {<Loader />}
              </div>
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
