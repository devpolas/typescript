// "use strict";

// union type

let age: string | number; //* age variable allow to String and number "|" = pipe symbols;

//! ----------------------------- array object -----------------------------

// let hobbies: string[] = ["sport", "cooking"];
let hobbies = ["sport", "cooking"];

//! hobbies.push(15); // not allowed

// let users: (string | number)[]; //* users array allow string or number;

let users: Array<string | number>; //* alternative generic type;

let possibleResult: [number, number]; //* tuple type other example let possibleResult: [number, strings]

//! ----------------------------- object -----------------------------

// let user = {
//   name: "Polas", //* on hover over the object show the default inferred object type
//   age: 28,
// };

let user: {
  name: string;
  age: number | number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Polas",
  age: 28,
  hobbies: ["sport", "cooking"],
  role: {
    description: "This is description",
    id: 5,
  },
};

let val: {} = "abc"; //! won't allowed null and undefined value

//* here record force to use data is a object and keys are string and values are should string or number
let data: Record<string, string | number>;
// data = "abc" //! now you are not allowed to data assign to other value
