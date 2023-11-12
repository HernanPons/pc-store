import React, { useEffect, useState } from 'react';
import productosData from '../data/Productos.json';
import {Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react'
import '../App.css'
import ItemCount from './ItemCount.jsx'


const ItemDetail = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productosData.Componentes);
  }, []);

  return (
    <div>
      <ul className='container'>
        {products.map((product, index) => (
          <div key={index}>
            <Card maxW='sm'>
            <CardBody>
                <Image
                src= {product.Img}
                alt= {product.Nombre}
                borderRadius='lg'
                />
                <Stack mt='3' spacing='3'>
                <Heading size='md'>
                  {product.Familia}
                  {product.ChipsetsPrincipal}
                </Heading>
                <Text className='descripcionCard'>
                    {product.Nombre}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${product.Precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>               
                <Button variant='solid' colorScheme='blue'>
                    Agregar al carrito
                </Button>              
            </CardFooter>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
