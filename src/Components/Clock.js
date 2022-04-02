import { Heading } from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Clock = ({ toggleColors }) => {
  const [time, setTime] = useState(
    moment(new Date().toLocaleTimeString(), 'hh:mm A').format('HH:mm')
  );
  useEffect(() => {
    let TimeId = setInterval(
      () =>
        setTime(
          moment(new Date().toLocaleTimeString(), 'hh:mm A').format('HH:mm')
        ),
      1000
    );
    return () => {
      clearInterval(TimeId);
    };
  });
  return (
    <Heading size="2xl" color={toggleColors ? 'gray.800' : '#F5F5F5'}>
      Current Time: {time}
    </Heading>
  );
};

export default Clock;
