import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));
