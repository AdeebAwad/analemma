import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { rgb } from '../Utils/Utils';

const MobileNav = ({ toggleColors, color }) => {
  return (
    <>
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'} spacing={4}>
          <Link
            textAlign={'end'}
            p={2}
            textColor={toggleColors ? 'gray.800' : '#F5F5F5'}
            href={'mailto:mhdadeebawad@gmail.com'}
            fontSize="md"
            fontWeight={600}
            _hover={{
              textDecoration: 'none',
              border: '1px',
              borderColor: rgb(color),
              borderRadius: 'md',
            }}
          >
            Contact Me
          </Link>

          <Link
            textAlign={'end'}
            color={toggleColors ? 'gray.800' : '#F5F5F5'}
            p="6px"
            _hover={{
              textDecoration: 'none',
              border: '1px',
              borderColor: rgb(color),
              borderRadius: 'md',
            }}
            href={'#'}
            isExternal
          >
            <ExternalLinkIcon mx="2px" mb="1px" />
            Source Code
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default MobileNav;
