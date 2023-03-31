import { cpuUsage } from "process";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filete
}

const uhyo = new User("uhyo", 26;)
const isAdult = uhyo.isAdult;

console.log(isAdult());
