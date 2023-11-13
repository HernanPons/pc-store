import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Image, Flex, Box, Spacer, Center, Square, Text, Input, Divider } from '@chakra-ui/react'
import './NavBar.css'
import { Link } from 'react-router-dom' 
import ItemDetailContainer from './ItemListContainer'

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
              <Link to={`./components/itemListContainer`}>
              <Image
                boxSize='2rem'
                borderRadius='100full'
                src='https://iili.io/JC5ex87.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              /></Link>
              <Link to={`./components/itemListContainer`}> Todos los productos </Link>
            </MenuItem>
            
            <MenuItem minH='48px'>
              <Link to={`./categoria/Procesador`}>
              <Image
                boxSize='2rem'
                borderRadius='100full'
                src='https://iili.io/JC5ex87.png'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
              </Link>
              <Link to={`./categoria/Procesador`}>Procesadores</Link>

              
            </MenuItem>

            <MenuItem minH='40px'>
              <Link to={`./categoria/RAM`}>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5ehMv.png'
                alt='Simon the pensive'
                mr='12px'
              />
              </Link>
              <Link to={`./categoria/RAM`}>Memoria RAM</Link>
            </MenuItem>

            <MenuItem minH='40px'>
              <Link to={`./categoria/Mother`}>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5eOcN.png'
                alt='Simon the pensive'
                mr='12px'
              />
              </Link>
              <Link to={`./categoria/Mother`}>Placas Base</Link>
            </MenuItem>

            <MenuItem minH='40px'>
              <Link to={`./categoria/Fuente`}>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://iili.io/JC5e8AX.png'
                alt='Simon the pensive'
                mr='12px'
              />
              </Link>
              <Link to={`./categoria/Fuente`}>Fuente de Alimentación</Link>
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