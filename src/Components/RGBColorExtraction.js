import { convertToMinutes, inRange } from '../Utils/Utils';
import { Zones } from './ZonesOfDay';

export const getColor = date => {
  let timeInMinutes = convertToMinutes(date);
  let zoneIndex = 0;
  let colors = {};
  for (var i = 0; i < Zones.length; i++) {
    if (inRange(timeInMinutes, Zones[i].startTime, Zones[i].endTime)) {
      zoneIndex = i;
      break;
    }
  }

  Zones[zoneIndex].colors.map((color, i) => {
    if (inRange(timeInMinutes, color.startTime, color.endTime)) {
      colors = calculateRGB(color, timeInMinutes);
    }
  });
  return colors;
};

function calculateRGB(color, timeInMinutes) {
  let colorTime = color.endTime - color.startTime;
  let colorRed = color.ER - color.SR;
  let colorBlue = color.EB - color.SB;
  let colorGreen = color.EG - color.SG;
  let colorRedVal =
    color.SR + ((timeInMinutes - color.startTime) * colorRed) / colorTime;
  let colorBlueVal =
    color.SB + ((timeInMinutes - color.startTime) * colorBlue) / colorTime;
  let colorGreenVal =
    color.SG + ((timeInMinutes - color.startTime) * colorGreen) / colorTime;

  return { red: colorRedVal, blue: colorBlueVal, green: colorGreenVal };
}
