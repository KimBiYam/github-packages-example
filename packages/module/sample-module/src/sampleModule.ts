import { hello } from '@kimbiyam/sample-util';

export const bye = (value: string) => {
  const helloValue = hello(value);
  return `${helloValue} bye ${value}`;
};

console.log(bye('hello'));
