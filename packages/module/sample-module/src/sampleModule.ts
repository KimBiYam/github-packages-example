import { hello } from '@kimbiyam/sample-util/src';

export const bye = (value: string) => {
  const helloValue = hello(value);
  return `${helloValue} bye ${value}`;
};
