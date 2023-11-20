import React from 'react';
import { Box, Container, Stack, SimpleGrid, Text, VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom' 


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
    className='footer'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link to={`./PagTrabajando`}>
            <Box as="a" href={'#'}>
              Acerca de nosotros
            </Box>
            </Link>
            <Link to={`./PagTrabajando`}>
            <Box as="a" href={'#'}>
              Trabajá con nosotros
            </Box>
            </Link>
            <Link to={`./PagTrabajando`}>
            <Box as="a" href={'#'}>
              Contactanos
            </Box>
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Seguinos en las redes</ListHeader>
            <Box as="a" href={'https://twitter.com'}>
             Twitter
            </Box>
            <Box as="a" href={'https://youtube.com'}>
              YouTube
            </Box>
            <Box as="a" href={'https://instagram.com'}>
              Instagram
            </Box>
          </Stack>

          <img src="https://i.pinimg.com/originals/1f/47/6b/1f476ba1a784f8750bacb054d41b06f7.jpg" alt="" />

          <Stack align={'flex-start'}>


          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023 Hernán Pons. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://youtube.com'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
