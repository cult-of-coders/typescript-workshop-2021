// Code: https://github.com/codemix/ts-sql
import { Query } from "@codemix/ts-sql";

const simpsons = {
  people: [
    { id: 1, firstName: "Bart", lastName: "Simpson", isChild: true },
    { id: 2, firstName: "Lisa", lastName: "Simpson", isChild: true },
    { id: 3, firstName: "Maggie", lastName: "Simpson", isChild: true },
    { id: 4, firstName: "Marge", lastName: "Simpson", isChild: false },
    { id: 5, firstName: "Homer", lastName: "Simpson", isChild: false },
    { id: 6, firstName: "Montgomery", lastName: "Burns", isChild: false },
    { id: 7, firstName: "Whelan", lastName: "Smithers", isChild: false },
    { id: 8, firstName: "Nillhouse", lastName: "Van Houten", isChild: true },
    { id: 9, firstName: "Nelson", lastName: "Muntz", isChild: true },
    { id: 10, firstName: "Principal", lastName: "Skinner", isChild: false },
  ],
  places: [
    { name: "Springfield Elementary", ownerId: 10, isActive: true },
    { name: "Nuclear Power Plant", ownerId: 6, isActive: true },
    { name: "Evergreen Terrace", ownerId: 4, isActive: true },
    { name: "Monorail", ownerId: 8, isActive: false },
    { name: "Treehouse of Horror", ownerId: 1, isActive: true },
    { name: "Playground", ownerId: 9, isActive: true },
  ],
} as const;

// This is the initial version of our database.
type DBv1 = typeof simpsons;

// Let's find the names of people with the last name "Simpson".
// We use the `Query` type to execute queries, it takes a SQL
// query as first type parameter, and a database as the second.
// Note that all SQL keywords are UPPERCASE.
type EX1 = Query<
  "SELECT firstName, lastName FROM people WHERE lastName = 'Simpson'",
  DBv1
>;

let a;
(a as EX1)[0].firstName;
