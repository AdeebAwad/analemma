import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import api from './axios';
import { assignToTimes } from './TimeOfDay';
import { createZones } from './ZonesOfDay';
import { getColor } from './RGBColorExtraction';
import NavBar from './NavBar';
import { isDay, rgb, INTERVAL_TIME } from '../Utils/Utils';
import TimeClock from './TimeClock';
import Footer from './Footer';

const Main = () => {
  const [date, setDate] = useState(
    moment(new Date().toLocaleTimeString(), 'hh:mm A').format('HH:mm')
  );
  const [refreshTime, setRefreshTime] = useState(true);
  const [zoneIsSet, setZoneIsSet] = useState(false);
  const [zoneIsUnset, setZoneIsUnset] = useState(false);
  const [RGB, setRGB] = useState({});

  useEffect(() => {
    const dateStartInternal = setInterval(() => {
      setRefreshTime(prevState => !prevState);
    }, INTERVAL_TIME);
    return () => {
      clearInterval(dateStartInternal);
    };
  }, []);

  useEffect(() => {
    setDate(moment(new Date().toLocaleTimeString(), 'hh:mm A').format('HH:mm'));
  }, [refreshTime]);

  useEffect(() => {
    if (zoneIsSet) {
      setRGB(getColor(date));
    }
  }, [refreshTime, zoneIsSet]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          getInfo(position);
        },
        error => {
          setZoneIsUnset(true);
        }
      );
    }
  }, []);

  const getInfo = async position => {
    const { data } = await api.get(`timings/${parseInt(Date.now() / 1000)}`, {
      params: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
    createZones(assignToTimes(data.data.timings));
    setZoneIsSet(true);
    setZoneIsUnset(false);
  };

  return (
    <>
      {zoneIsSet && JSON.stringify(RGB) !== '{}' ? (
        <>
          <NavBar toggleColors={isDay(date)} color={RGB} />
          <Container maxW={'10xl'} bg={rgb(RGB)}>
            <TimeClock date={date} toggleColors={isDay(date)} />
          </Container>
          <Footer color={RGB} toggleColors={isDay(date)} />
        </>
      ) : null}
      {zoneIsUnset && (
        <Text>The Site Only Works If location Permission is granted.</Text>
      )}
    </>
  );
};

export default Main;
