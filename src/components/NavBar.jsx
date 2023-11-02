import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Image, Flex, Box, Spacer, Center, Square, Text, Input, Divider } from '@chakra-ui/react'
import './NavBar.css'


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
            <Input placeholder='Basic usage' />
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
                src='./public/Images/Processor.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
              <span>Procesadores</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='./public/Images/Ram.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Memoria RAM</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='./public/Images/Mother.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Placas Base</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='./public/Images/Power.png'
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