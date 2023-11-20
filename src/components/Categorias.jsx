import React from 'react';
import { SimpleGrid, Box, Card, CardHeader, Heading, CardBody, Text, Button, CardFooter } from '@chakra-ui/react';
import './Categorias.css';
import { Link } from 'react-router-dom' 

const Categorias = () => {
  return (
    <Box className="categorias-container">
      <SimpleGrid spacing={5} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
        <Link to={`./productos/Procesador`}>
        <Card>
          <CardHeader>
            <Heading size='md'> Procesadores</Heading>
          </CardHeader>
          <CardBody>
            <img src="https://i.imgur.com/K5DY1qA.jpg" alt="Procesadores" />
          </CardBody>
          <CardFooter>
            <Button>Ver categoria</Button>
          </CardFooter>
        </Card>
        </Link>
        <Link to={`./productos/Mother`}>
        <Card>
          <CardHeader>
            <Heading size='md'> Placas Base</Heading>
          </CardHeader>
          <CardBody>
            <img src="https://i.imgur.com/RvcEPBL.jpg" alt="Placas Base" />
          </CardBody>
          <CardFooter>
            <Button>Ver categoria</Button>
          </CardFooter>
        </Card>
        </Link>
        <Link to={`./productos/Fuente`}>
        <Card>
          <CardHeader>
            <Heading size='md'> Fuentes de Alimentacion</Heading>
          </CardHeader>
          <CardBody>
            <img src="https://i.imgur.com/LcGNFrk.jpg" alt="Fuentes de Alimentacion" />
          </CardBody>
          <CardFooter>
            <Button>Ver categoria</Button>
          </CardFooter>
        </Card>
        </Link>
        <Link to={`./productos/RAM`}>
        <Card>
          <CardHeader>
            <Heading size='md'> Memorias RAM</Heading>
          </CardHeader>
          <CardBody>
            <img src="https://i.imgur.com/q5knVvY.jpg" alt="Memorias RAM" />
          </CardBody>
          <CardFooter>
            <Button>Ver categoria</Button>
          </CardFooter>
        </Card>
        </Link>
        
      </SimpleGrid>
    </Box>
  );
}

export default Categorias;
