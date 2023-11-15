import React, { useEffect, useState, lazy } from 'react';
import productosData from '../data/Productos.json';
import {Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react'
import '../App.css'
import ItemCount from './ItemCount.jsx'
import { useParams, Link } from 'react-router-dom'



const ItemDetail = ({GoBack, product }) => {
  

  return (
    <div>
      <Card maxW='sm'>

        <Button variant='solid' colorScheme='blue' onClick={GoBack}>
            Volver atrás
        </Button>

        <CardBody>
          <Image
            /* src={product.Img} */
            alt={product.Nombre}
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
          <ItemCount />

        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
