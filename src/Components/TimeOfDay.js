import { convertToMinutes } from '../Utils/Utils';

export var Times = {};

// Assign times of day to array
export function assignToTimes(timing) {
  Times = {
    Fajr: convertToMinutes(timing.Fajr),
    Sunrise: convertToMinutes(timing.Sunrise),
    Dhuhr: convertToMinutes(timing.Dhuhr),
    Asr: convertToMinutes(timing.Asr),
    Maghrib: convertToMinutes(timing.Maghrib),
    Isha: convertToMinutes(timing.Isha),
    Midnight: 1439,
  };

  return Times;
}
