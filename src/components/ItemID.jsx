import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productosData from '../data/Productos.json';
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react';
import '../App.css';

const ItemID = () => {
  const { ID } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProduct = productosData.Componentes.find((p) => p.ID === ID);
    setProduct(selectedProduct);
  }, [ID]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const GoBack = () => {
    navigate(-1);
  };



  //Agregar Boton para volver atras
  //Crear pantalla de error de producto no encontrado
  //Cambiar estilo de pagina para que agregue mas detalles
  //Darle funcionalidad al carrito
  //Agregar ITEMCOUNT





  return (
    <div>
      <Card maxW='sm'>

        <Button variant='solid' colorScheme='blue' onClick={GoBack}>
            Volver atrás
        </Button>

        <CardBody>
          <Image
            src={product.Img}
            alt={product.Nombre}
            borderRadius='lg'
          />
          <Stack mt='3' spacing='3'>
            <Heading size='md'>
              {product.Familia} {product.ChipsetsPrincipal}
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
  );
};

export default ItemID;
