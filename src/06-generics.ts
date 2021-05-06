/**
 * GENERICS
 * Welcome to the mindblowing experience of TS
 */

function identity<T>(value: T): T {
  return value;
}

let output;
output = identity<string>("test");
output = identity("test");
// @ts-expect-error
output = identity<number>("test");

// let's talk about real use case
// you can default types to other things
function restApiCall<T = any>(
  uri: string
): {
  code: string;
  result: T[];
} {
  return {
    code: "ok",
    result: [],
  };
}

interface IUser {
  firstName: string;
  lastName: string;
}

const response = restApiCall<IUser>("https://users.com");
const user = response.result[0];
user.firstName;

// generics can be at Type,Class,Interface level.

// let's create a type that is a function that returns a specific type:
type Returns<T> = () => T;
const a1: Returns<string> = () => "abc";
// @ts-expect-error
const a2: Returns<string> = () => 123;

interface IRestApiCallResponse<T> {
  code: string;
  result: T[];
}

function restApiCall2<T = any>(uri: string): IRestApiCallResponse<T> {
  // Do your thang'
  return {
    code: "string",
    result: [],
  };
}

class RestLoader<T> {
  results: T[];

  load() {
    // where you store results.
  }
}

const loader = new RestLoader<IUser>();
const userLoaded = loader.results[0];

class UserLoader extends RestLoader<IUser> {}
const loader2 = new UserLoader();
const userLoaded2 = loader.results[0];
