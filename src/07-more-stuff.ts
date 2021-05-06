export {};

// Go here: https://www.typescriptlang.org/docs/handbook/utility-types.html

interface IPerson {
  name: string;
  age: number;
  gender?: "male" | "female" | "velociraptor" | "other";
}

const a: Partial<IPerson> = {
  name: "abc",
};

const b: Required<IPerson> = {
  name: "a",
  age: 123,
  gender: "male",
};

const c: Readonly<IPerson> = {
  name: "abc",
  age: 123,
};

// @ts-expect-error
c.name = "test";

class A {
  saySomething() {
    return "something";
  }

  static saySomethingStatic() {
    return "somethingStatic";
  }
}

// Show case typeof or without typeof
function perform(value: typeof A) {
  //
  value.saySomethingStatic();

  let newValue: InstanceType<typeof value> = new A();
  newValue.saySomething();
}

// typeof
// Prints "string"
console.log(typeof "Hello world");

function f() {
  return { x: 10, y: 3 };
}
// @ts-expect-error
type P1 = ReturnType<f>;

// Use typeof correctly
type P2 = ReturnType<typeof f>;

// Search Engine Demo

class User {
  firstName: string;
  lastName: string;
  age: number;
}

type K1 = keyof User; // "firstName" | "lastName" | "age"
type K2 = keyof User[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: User }; // string

type UserSearchPreference<T> = {
  [key in keyof T]: number;
};

const userPriorities: UserSearchPreference<User> = {
  firstName: 10,
  lastName: 10,
  age: 10,
};

// ^ This will fail if you ommit a specific key.
// EXERCISE: How should we do it if we want to only specify a subset of keys?
