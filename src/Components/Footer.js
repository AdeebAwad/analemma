import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';
import { rgb } from '../Utils/Utils';

const Footer = ({ color, toggleColors }) => {
  return (
    <Box bg={rgb(color)} py={'3em'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'} color={toggleColors ? 'gray.800' : '#F5F5F5'}>
            Home
          </Link>
          <Link
            href={'mailto:mhdadeebawad@gmail.com'}
            color={toggleColors ? 'gray.800' : '#F5F5F5'}
          >
            Contact
          </Link>
        </Stack>
        <Text color={toggleColors ? 'gray.800' : '#F5F5F5'}>
          ©All rights reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
