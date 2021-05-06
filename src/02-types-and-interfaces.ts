/**
 * OBJECTS
 */
const CULTDeveloper: {
  age: number;
  name: string;
} = {
  age: 25,
  name: "Tim Apple",
};

// Declaring the type outside
type Developer = {
  age: number;
  name: string;
  favoriteDish?: string; // ? === optional
};

const tim: Developer = {
  age: 25,
  name: "Tim Apple",
};

/**
 * THE ANY OF OBJECTS
 */

let sample: object;
// It can be any type of object
// object is like "any" form of object
sample = {
  a: 123,
  b: 1234,
};

/**
 * INTERFACES
 *
 */

interface IDeveloper {
  age: number;
}
let dev: IDeveloper = { age: 28 };

/**
 * TYPES VS INTERFACES
 */

type MyType = { a: number };

interface IMyType {
  a: number;
}

type ExtendedMyType = MyType & { b: number };

interface IExtendedMyType extends IMyType {
  b: number;
}

// always prefer interfaces as they can be easily extended
// whatever you choose stay consistent along the codebase

// you can also extend interfaces from other packages
interface IMyType {
  c: number;
}
const my: IMyType = {
  a: 123,
  c: 1234,
};

// situations in which you can't use an interface
// when the type is a union of primitives:
type StringOrNumber = string | number;
type NumberReturner = () => number;

// @ts-expect-error
const numberReturner1: NumberReturner = () => "123";

const numberReturner2: NumberReturner = () => 123;

// arrays
const arr: IMyType[] = [
  {
    a: 123,
    c: 123,
  },
];

/**
 * STRING TYPES
 */
type Color = "red" | "blue" | "green";
const red: Color = "red";
