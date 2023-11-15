import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div key={product.ID}>
        <Card maxW='sm'>
            <CardBody>
                <Image
                /* src= {product.Img} */
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
                <Link to={`/producto/${product.ID}`}>              
                    <Button variant='solid' colorScheme='blue'>
                        Ver detalles
                        {product.ID}
                    </Button>
                </Link>               
            </CardFooter>
            </Card>
    </div>
  )
}

export default Item