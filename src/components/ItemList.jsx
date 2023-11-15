import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ products, categoria, id }) => {
  return (
    <div>
      <ul className='container'>
        {products.map((product) => (
          <Item key={product.ID} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
