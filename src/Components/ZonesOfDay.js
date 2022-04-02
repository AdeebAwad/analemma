import {
  Midnight,
  SunsetOrange,
  SandyBrown,
  Shady,
  White,
  AzureishWhite,
  PaleCornflowerBlue,
  EnglishViolet,
  SpaceCadet,
  MaastrichtBlue,
} from './ColorsOfTheDay';

export const Zones = [];

const createZones = time => {
  let ZoneZero = {
    startTime: 0,
    endTime: time.Fajr,
    colors: [
      {
        SR: Midnight.R,
        SG: Midnight.G,
        SB: Midnight.B,
        ER: MaastrichtBlue.R,
        EG: MaastrichtBlue.G,
        EB: MaastrichtBlue.B,
        startTime: 0,
        endTime: time.Fajr,
      },
    ],
  };

  let ZoneOne = {
    startTime: time.Fajr,
    endTime: time.Sunrise,
    colors: [
      {
        SR: MaastrichtBlue.R,
        SG: MaastrichtBlue.G,
        SB: MaastrichtBlue.B,
        ER: SpaceCadet.R,
        EG: SpaceCadet.G,
        EB: SpaceCadet.B,
        startTime: time.Fajr,
        endTime: time.Fajr + ((time.Sunrise - time.Fajr) * 33) / 100,
      },
      {
        SR: SpaceCadet.R,
        SG: SpaceCadet.G,
        SB: SpaceCadet.B,
        ER: EnglishViolet.R,
        EG: EnglishViolet.G,
        EB: EnglishViolet.B,
        startTime: time.Fajr + ((time.Sunrise - time.Fajr) * 33) / 100,
        endTime: time.Fajr + ((time.Sunrise - time.Fajr) * 66) / 100,
      },
      {
        SR: EnglishViolet.R,
        SG: EnglishViolet.G,
        SB: EnglishViolet.B,
        ER: PaleCornflowerBlue.R,
        EG: PaleCornflowerBlue.G,
        EB: PaleCornflowerBlue.B,
        startTime: time.Fajr + ((time.Sunrise - time.Fajr) * 66) / 100,
        endTime: time.Sunrise,
      },
    ],
  };

  let ZoneTwo = {
    startTime: time.Sunrise,
    endTime: time.Dhuhr,
    colors: [
      {
        SR: PaleCornflowerBlue.R,
        SG: PaleCornflowerBlue.G,
        SB: PaleCornflowerBlue.B,
        ER: AzureishWhite.R,
        EG: AzureishWhite.G,
        EB: AzureishWhite.B,
        startTime: time.Sunrise,
        endTime: time.Sunrise + ((time.Dhuhr - time.Sunrise) * 50) / 100,
      },
      {
        SR: AzureishWhite.R,
        SG: AzureishWhite.G,
        SB: AzureishWhite.B,
        ER: White.R,
        EG: White.G,
        EB: White.B,
        startTime: time.Sunrise + ((time.Dhuhr - time.Sunrise) * 50) / 100,
        endTime: time.Dhuhr,
      },
    ],
  };

  let ZoneThree = {
    startTime: time.Dhuhr,
    endTime: time.Asr,
    colors: [
      {
        SR: White.R,
        SG: White.G,
        SB: White.B,
        ER: Shady.R,
        EG: Shady.G,
        EB: Shady.B,
        startTime: time.Dhuhr,
        endTime: time.Asr,
      },
    ],
  };

  let ZoneFour = {
    startTime: time.Asr,
    endTime: time.Maghrib,
    colors: [
      {
        SR: Shady.R,
        SG: Shady.G,
        SB: Shady.B,
        ER: SandyBrown.R,
        EG: SandyBrown.G,
        EB: SandyBrown.B,
        startTime: time.Asr,
        endTime: time.Asr + ((time.Maghrib - time.Asr) * 50) / 100,
      },
      {
        SR: SandyBrown.R,
        SG: SandyBrown.G,
        SB: SandyBrown.B,
        ER: SunsetOrange.R,
        EG: SunsetOrange.G,
        EB: SunsetOrange.B,
        startTime: time.Asr + ((time.Maghrib - time.Asr) * 50) / 100,
        endTime: time.Maghrib,
      },
    ],
  };

  let ZoneFive = {
    startTime: time.Maghrib,
    endTime: time.Isha,
    colors: [
      {
        SR: SunsetOrange.R,
        SG: SunsetOrange.G,
        SB: SunsetOrange.B,
        ER: EnglishViolet.R,
        EG: EnglishViolet.G,
        EB: EnglishViolet.B,
        startTime: time.Maghrib,
        endTime: time.Maghrib + ((time.Isha - time.Maghrib) * 33) / 100,
      },
      {
        SR: EnglishViolet.R,
        SG: EnglishViolet.G,
        SB: EnglishViolet.B,
        ER: SpaceCadet.R,
        EG: SpaceCadet.G,
        EB: SpaceCadet.B,
        startTime: time.Maghrib + ((time.Isha - time.Maghrib) * 33) / 100,
        endTime: time.Maghrib + ((time.Isha - time.Maghrib) * 66) / 100,
      },
      {
        SR: SpaceCadet.R,
        SG: SpaceCadet.G,
        SB: SpaceCadet.B,
        ER: MaastrichtBlue.R,
        EG: MaastrichtBlue.G,
        EB: MaastrichtBlue.B,
        startTime: time.Maghrib + ((time.Isha - time.Maghrib) * 66) / 100,
        endTime: time.Isha,
      },
    ],
  };

  let ZoneSix = {
    startTime: time.Isha,
    endTime: time.Midnight,
    colors: [
      {
        SR: MaastrichtBlue.R,
        SG: MaastrichtBlue.G,
        SB: MaastrichtBlue.B,
        ER: Midnight.R,
        EG: Midnight.G,
        EB: Midnight.B,
        startTime: time.Isha,
        endTime: time.Midnight,
      },
    ],
  };

  Zones.push(
    ZoneZero,
    ZoneOne,
    ZoneTwo,
    ZoneThree,
    ZoneFour,
    ZoneFive,
    ZoneSix
  );
};

export { createZones };
