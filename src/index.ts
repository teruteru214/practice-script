import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age,
});

const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);
