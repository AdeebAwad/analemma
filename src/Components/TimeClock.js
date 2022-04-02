import { Box, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import { getRotationDegree, INTERVAL_TIME, isDay } from '../Utils/Utils';
import Clock from './Clock';

const TimeClock = ({ date, toggleColors }) => {
  return (
    <Box align={'center'} py={10}>
      <VStack spacing={20}>
        <Clock toggleColors={toggleColors} />
        <Box
          position={'relative'}
          w={{ base: '300px', md: '500px' }}
          h={{ base: '300px', md: '500px' }}
          border={'2px dashed'}
          borderColor={toggleColors ? 'gray.800' : '#F5F5F5'}
          borderRadius={'50%'}
          transform={`rotate(${getRotationDegree(date)}deg)`}
          transition={`transform ${INTERVAL_TIME} linear`}
        >
          {isDay(date) ? (
            <Image
              alt="Sun"
              src={Sun}
              objectFit={'cover'}
              position={'absolute'}
              w={{ base: '60px', md: '110px' }}
              h={{ base: '60px', md: '110px' }}
              top={{ base: '115px', md: '180px' }}
              left={{ base: '-28px', md: '-50px' }}
              transition={`transform ${INTERVAL_TIME} linear`}
              transform={`rotate(-${getRotationDegree(date)}deg)`}
            />
          ) : (
            <Image
              alt="Moon"
              src={Moon}
              objectFit={'cover'}
              position={'absolute'}
              w={{ base: '60px', md: '110px' }}
              h={{ base: '60px', md: '110px' }}
              bottom={{ base: '115px', md: '180px' }}
              right={{ base: '-28px', md: '-50px' }}
              transition={`transform ${INTERVAL_TIME} linear`}
              transform={`rotate(-${getRotationDegree(date)}deg)`}
            />
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default TimeClock;
