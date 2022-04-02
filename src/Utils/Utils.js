import { Times } from '../Components/TimeOfDay';

export const convertToMinutes = time => {
  let timeArray = time.split(':');
  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};

// return true if in range, otherwise false
export const inRange = (x, min, max) => {
  return (x - min) * (x - max) <= 0;
};

export const rgb = RGB => {
  let red = JSON.stringify(RGB) === '{}' ? 0 : RGB.red;
  let blue = JSON.stringify(RGB) === '{}' ? 0 : RGB.blue;
  let green = JSON.stringify(RGB) === '{}' ? 0 : RGB.green;
  return `rgba(${red}, ${green}, ${blue},0.9)`;
};

// export const textColor = date => {
//   date >
// };

export const getRotationDegree = date => {
  let currentTimeInMinutes = convertToMinutes(date);
  let degree = 0;
  if (isDay(date)) {
    degree =
      ((currentTimeInMinutes - Times.Sunrise) * 180) /
      (Times.Maghrib - Times.Sunrise);
  } else {
    if (currentTimeInMinutes <= Times.Maghrib) {
      degree = (currentTimeInMinutes * 90) / Times.Sunrise;
    } else {
      degree =
        ((currentTimeInMinutes - Times.Maghrib) * 90) /
        (Times.Midnight - Times.Maghrib);
    }
  }
  return degree;
};

export function isDay(date) {
  return inRange(convertToMinutes(date), Times.Sunrise, Times.Maghrib);
}

export const INTERVAL_TIME = 600000;

export const SOURCE_CODE_LINK = 'https://github.com/AdeebAwad/analemma';
