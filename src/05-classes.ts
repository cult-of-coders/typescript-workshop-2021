export {};

/**
 * CLASSES
 */
class User {
  firstName: string;
  lastName: string;
}

const user = new User();
user.firstName = "Vali";
user.lastName = "Vijelie";

/**
 * More secure
 */
class User2 {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user2 = new User2("Nicu", "Paleru");
// problem: you have to create "getters" for them
// @ts-expect-error
user2.firstName;

/**
 * Other approach
 * readonly allows you setting it up only in the constructor
 */
class User3 {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}

const user3 = new User3("Florin", "Cercel");
// @ts-expect-error
user3.firstName = "123";

// Note: Use protected functions for those you don't want exposure as it simplifies the autocompletion api
