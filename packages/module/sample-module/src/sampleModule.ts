import { utilFunction } from '@kimbiyam/sample-util';

export const bye = (value: string) => {
  const helloValue = utilFunction(value);
  return `${helloValue} bye ${value}`;
};
