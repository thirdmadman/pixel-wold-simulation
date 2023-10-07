import { UnitType } from '../interfaces/IUnitType';

interface IUnitTypesStringsToIndex {
  [propName: string]: number;
}

export const UnitTypesStringsToIndex = {
  'yellow-sand': 0,
  'pure-water': 1,
  'gray-rock': 2,
  'flammable-gas': 3,
  'red-blood': 4,
  'yellow-flame': 5,
  'gray-smoke': 6,
  'black-oil': 7,
  'rock-hard': 8,
  'wood-wall': 9,
} as IUnitTypesStringsToIndex;

// Air density 0,00127 (1 Ton/m3)

// Colors order in 0x00caca is B G R

export const UnitTypesArray = [
  {
    unitName: 'yellow-sand',
    unitIsLiquid: false,
    unitIsStatic: false,
    unitIsGas: false,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 1,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 800,
    unitDurability: 4,
    unitDensity: 1.5,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x14,
      colorShiftNumbers: 0xfff,
      baseColor: 0x00cdeb + 0xff000000,
    },
    unitTransformations: {
      toFreeze: 'yellow-sand',
      toLiquid: 'molten-glass',
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'pure-water',
    unitIsLiquid: true,
    unitIsStatic: false,
    unitIsGas: false,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 1,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 10,
    unitDurability: 0,
    unitDensity: 1,
    unitDefaultColor: {
      minRandomColor: 0x0,
      maxRandomColor: 0x0,
      colorShiftNumbers: 0xfff,
      baseColor: 0xffd900 + 0x77000000,
    },
    unitTransformations: {
      toFreeze: 'pure-ice',
      toLiquid: 'pure-water',
      toVapor: 'water-steam',
      toDestroy: 'water-steam',
      toCorrode: 'water-steam',
    },
  },
  {
    unitName: 'gray-rock',
    unitIsLiquid: false,
    unitIsStatic: true,
    unitIsGas: false,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 3,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 100,
    unitDurability: 0,
    unitDensity: 2.6,
    unitDefaultColor: {
      minRandomColor: 0x0a,
      maxRandomColor: 0x52,
      colorShiftNumbers: 0xfff,
      baseColor: 0x818181 + 0xff000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: 'molten-rock',
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'flammable-gas',
    unitIsLiquid: false,
    unitIsStatic: false,
    unitIsGas: true,
    unitIsFlammable: true,
    unitDefaultFlameSustainability: 600,
    unitDefaultFireHP: 10,
    unitDefaultHealth: 10,
    unitDurability: 0,
    unitDensity: 0.00182,
    unitDefaultColor: {
      minRandomColor: 0x0a,
      maxRandomColor: 0x52,
      colorShiftNumbers: 0xfff,
      baseColor: 0x11aa00 + 0x33000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: 'flammable-liquid',
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'red-blood',
    unitIsLiquid: true,
    unitIsStatic: false,
    unitIsGas: false,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 1,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 10,
    unitDurability: 0,
    unitDensity: 1.030,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x00,
      colorShiftNumbers: 0xfff,
      baseColor: 0x020083 + 0xaa000000, // aa830002
    },
    unitTransformations: {
      toFreeze: 'frozen-red-blood',
      toLiquid: null,
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'yellow-flame',
    unitIsLiquid: false,
    unitIsStatic: false,
    unitIsGas: false,
    unitIsFlame: true,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 1,
    unitDefaultFireHP: 1,
    unitDefaultHealth: 3,
    unitDurability: 0,
    unitDensity: 0.00033,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x00,
      colorShiftNumbers: 0x000,
      baseColor: 0x0060ff + 0xff000000, // ff6000
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: null,
      toVapor: null,
      toDestroy: 'gray-smoke',
      toCorrode: null,
    },
  },
  {
    unitName: 'gray-smoke',
    unitIsLiquid: false,
    unitIsStatic: false,
    unitIsGas: true,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 1,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 100,
    unitDurability: 0,
    unitDensity: 0.00061,
    unitDefaultColor: {
      minRandomColor: 0x0a,
      maxRandomColor: 0x10,
      colorShiftNumbers: 0xfff,
      baseColor: 0x818181 + 0x77000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: null,
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'black-oil',
    unitIsLiquid: true,
    unitIsStatic: false,
    unitIsGas: false,
    unitIsFlammable: true,
    unitDefaultFlameSustainability: 995,
    unitDefaultFireHP: 500,
    unitDefaultHealth: 1000,
    unitDurability: 0,
    unitDensity: 0.88,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x14,
      colorShiftNumbers: 0x00f,
      baseColor: 0x000000 + 0xff000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: null,
      toVapor: null,
      toDestroy: 'gray-smoke',
      toCorrode: null,
    },
  },
  {
    unitName: 'rock-hard',
    unitIsLiquid: false,
    unitIsStatic: true,
    unitIsGas: false,
    unitIsFlammable: false,
    unitDefaultFlameSustainability: 0,
    unitDefaultFireHP: 0,
    unitDefaultHealth: 200000,
    unitDurability: 12,
    unitDensity: 0.88,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x14,
      colorShiftNumbers: 0xfff,
      baseColor: 0x23237e + 0xff000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: null,
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
  {
    unitName: 'wood-wall',
    unitIsLiquid: false,
    unitIsStatic: true,
    unitIsGas: false,
    unitIsFlammable: true,
    unitDefaultFlameSustainability: 992,
    unitDefaultFireHP: 600,
    unitDefaultHealth: 2000,
    unitDurability: 10,
    unitDensity: 0.88,
    unitDefaultColor: {
      minRandomColor: 0x00,
      maxRandomColor: 0x14,
      colorShiftNumbers: 0x00f,
      baseColor: 0x1978a6 + 0xff000000,
    },
    unitTransformations: {
      toFreeze: null,
      toLiquid: null,
      toVapor: null,
      toDestroy: null,
      toCorrode: null,
    },
  },
] as Array<UnitType>;

export const getUnitTypeByUnitTypeName = (unitTypeName: string) => {
  const unitIndex = UnitTypesStringsToIndex[unitTypeName];
  return UnitTypesArray[unitIndex];
};
