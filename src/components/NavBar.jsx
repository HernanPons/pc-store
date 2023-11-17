import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Image, Flex, Box, Spacer, Center, Square, Text, Input, Divider } from '@chakra-ui/react'
import './NavBar.css'
import { Link } from 'react-router-dom' 


const NavBar = () => {
  return (
    <div className='header'>
        <Flex align='center'>
          <Link to={`./`}>
            <Image
              className='logo'
              boxSize='5rem'
              src="https://i.pinimg.com/originals/1f/47/6b/1f476ba1a784f8750bacb054d41b06f7.jpg"
              alt='PC-Store'
              mr='12px'
            />
          </Link>
          <Link to={`./`}>
            <Text fontSize='xl' fontWeight='bold' className='pcStore'>PC-Store</Text>
          </Link>

          <Spacer />
            <Input placeholder='Algun día seré un buscador' />
          <Spacer />
          <Link to={`./components/Cart`}>
          <Box p='4' >
            <CartWidget />
          </Box>
          </Link>
        </Flex>
        <hr className='hrNav'/>
        <Flex>
          <Square size='70px'>
          <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>

            <Link to={`./productos`}>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                borderRadius='100full'
                src='https://iili.io/JC5ex87.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
              <p>Todos los productos</p>
            </MenuItem>
            </Link>
            
            <Link to={`./productos/Procesador`}>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                borderRadius='100full'
                src='https://iili.io/JC5ex87.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />  
              <p>Procesadores</p>
            </MenuItem>
            </Link>

            <Link to={`./productos/RAM`}>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5ehMv.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <p>Memoria RAM</p>
            </MenuItem>
            </Link>

            <Link to={`./productos/Mother`}>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5eOcN.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <p>Placas Base</p>
            </MenuItem>
            </Link>

            <Link to={`./productos/Fuente`}>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5e8AX.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <p>Fuente de Alimentación</p>
            </MenuItem>
            </Link>

          </MenuList>
          </Menu>
          </Square>
        </Flex>
        
        <hr className='hrNav'/>
        

    </div>
  )
}

export default NavBar