// primitives: string, number, boolean, object, function, array

// automatically assigns the type based on the initialisation value
let hello = "Hello world";

// @ts-expect-error
hello = 5;

let hello2: number | string = "Hello world";
hello2 = 5;

/**
 * ANY and UNKOWN
 */

// any type. try to avoid.

let anything: any = "1234";
anything = 1234;
anything = {};

// as you can see, it's quite dangerous
anything.test.anything;

// unknown is the opposite of any in a way
let something: unknown = 123;

// @ts-expect-error
something.toFixed(2);

// nothing will work with it unless you cast it

// casting the type
(something as number).toFixed(2);

/**
 * ARRAYS
 */

// equivalent with any[]
let array: Array<any> = [1, "123", true];
let array2: string[] = ["123", "1234"];

// array of multiple elements
let array3: Array<number | string> = [1, "123"];
// @ts-expect-error
let array4: number[] | string[] = [1, "123"];

/**
 * FUNCTIONS
 */
function hash(str: string, salt: string): string {
  return "sEcuRe-HasHing";
}

/**
 * EXCEPTIONS
 * never = it will never execute, throws exceptions
 */
function doSomething(): never {
  throw new Error();
}

function getMeString(): string | never {
  // doSomething();
  throw new Error();
}

/**
 * ENUMS
 */
enum MusicalTypes {
  ROCK,
  MANELE,
}

MusicalTypes.ROCK; // 0

enum MusicalTypes2 {
  ROCK = "rock",
  MANELE = "manele",
}

MusicalTypes2.ROCK; // "rock"

let musicalType: MusicalTypes2 = MusicalTypes2.ROCK;

// @ts-expect-error
let musicalType2: MusicalTypes2 = "rock";
