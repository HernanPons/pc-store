import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Image, Flex, Box, Spacer, Center, Square, Text, Input, Divider } from '@chakra-ui/react'
import './NavBar.css'
import { Link } from 'react-router-dom' 
import ItemDetailContainer from './ItemDetailContainer'

const NavBar = () => {
  return (
    <div className='header'>
        <Flex align='center'>
          
            <Image
              className='logo'
              boxSize='5rem'
              src="https://i.pinimg.com/originals/1f/47/6b/1f476ba1a784f8750bacb054d41b06f7.jpg"
              alt='PC-Store'
              mr='12px'
            />
            
          
            <Text fontSize='xl' fontWeight='bold' className='pcStore'>PC-Store</Text>
          

          <Spacer />
            <Input placeholder='Algun día seré un buscador' />
          <Spacer />
          <Box p='4' >
            <CartWidget />
          </Box>
        </Flex>
        <hr className='hrNav'/>
        <Flex>
          <Square size='70px'>
          <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                borderRadius='100full'
                src='https://iili.io/JC5ex87.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
              <span>Procesadores</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5ehMv.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Memoria RAM</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5eOcN.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Placas Base</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5e8AX.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Fuente de Alimentación</span>
            </MenuItem>
          </MenuList>
          </Menu>
          </Square>
        
        </Flex>
        
        <hr className='hrNav'/>
        

    </div>
  )
}

export default NavBar