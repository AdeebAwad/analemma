import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import IconDay from './IconDay';
import IconNight from './IconNight';
import MobileNav from './MobileNav';
import { isDay, rgb, SOURCE_CODE_LINK } from '../Utils/Utils';

const color = { light: 'white', dark: 'black' };

const NavBar = ({ toggleColors, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box p={3} bg={rgb(color)}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {toggleColors ? <IconDay /> : <IconNight />}

          <Flex alignItems={'center'}>
            <Stack
              display={{ base: 'none', md: 'flex' }}
              direction={'row'}
              spacing={7}
            >
              <Link
                p={2}
                href={'mailto:mhdadeebawad@gmail.com'}
                fontSize="md"
                fontWeight={600}
                color={toggleColors ? 'gray.800' : '#F5F5F5'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Contact Me
              </Link>

              <Link
                color={toggleColors ? 'gray.800' : '#F5F5F5'}
                pt="6px"
                _hover={{
                  textDecoration: 'none',
                }}
                href={SOURCE_CODE_LINK}
                isExternal
              >
                <ExternalLinkIcon mx="2px" mb="1px" />
                Source Code
              </Link>
            </Stack>
          </Flex>
          <IconButton
            size={'md'}
            color={toggleColors ? 'gray.800' : '#F5F5F5'}
            icon={
              isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={7} />
            }
            bg={rgb(color)}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              bg: rgb(color),
            }}
          />
        </Flex>
        {isOpen ? (
          <MobileNav toggleColors={toggleColors} color={color} />
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
