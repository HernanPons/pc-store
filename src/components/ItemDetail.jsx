import React, { useEffect, useState } from 'react';
import productosData from '../data/Productos.json';
import {Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react'
import '../App.css'
import ItemCount from './ItemCount.jsx'
import { useParams, Link } from 'react-router-dom'



const ItemDetail = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(productosData.Componentes);
  }, []);
  
  const { Categoria } = useParams();
  const filteredProducts = Categoria
    ? products.filter((product) => product.Categoria === Categoria)
    : products;

  const {ID} = useParams ()





  console.log(Categoria)
  console.log(filteredProducts)
   

  return (
    <div>
      <ul className='container'>
        {filteredProducts.map((product, index) => (
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
              <Link to={`/ItemID/${product.ID}`}>              
                <Button variant='solid' colorScheme='blue'>
                    Ver detalles
                    {product.ID}
                </Button>
              </Link>               
            </CardFooter>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
