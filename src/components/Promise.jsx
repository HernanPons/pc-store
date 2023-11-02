import React, { useEffect, useState } from 'react';
import productosData from './productos.json';
import {Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react'
import '../App.css'


const PromiseComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productosData.Procesadores);
  }, []);

  return (
    <div>
      <ul className='container'>
        {products.map((product, index) => (
          <div key={index}>
            <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://loremflickr.com/320/240'
                alt='Green double couch with wooden legs'
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
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PromiseComponent;
