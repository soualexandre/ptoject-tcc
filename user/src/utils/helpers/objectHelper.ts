/* eslint-disable @typescript-eslint/ban-types */
type Props = {
  [x: string]: {
    startingDay?: boolean;
    endingDay?: true;
    color?: string;
    textColor?: string;
  };
};

export const isEmptyObject = (object: Object) =>
  object === undefined || object === null || Object.keys(object).length === 0;

export const getLengthObject = (object: Props | Object) =>
  Object.keys(object).length;

export const getObjectKeyFirst = (object: Props) => Object.keys(object)[0];

export const getObjectkeyLast = (object: Props) =>
  Object.keys(object)[getLengthObject(object) - 1];
