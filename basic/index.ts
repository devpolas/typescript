// "use strict";

// union type

let myAge: string | number; //* age variable allow to String and number "|" = pipe symbols;
myAge = 28;
//! ----------------------------- array object -----------------------------

// let hobbies: string[] = ["sport", "cooking"];
let myHobbies = ["sport", "cooking"];

//! hobbies.push(15); // not allowed

// let users: (string | number)[]; //* users array allow string or number;

let myUsers: Array<string | number>; //* alternative generic type;

let possibleResults: [number, number]; //* tuple type other example let possibleResult: [number, strings]

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

let someValue: {} = "abc"; //! won't allowed null and undefined value

// flexible object with built-in typescript Record
//* here record force to use data is a object and keys are string and values are should string or number
let SomeData: Record<string, string | number>;
// data = "abc" //! now you are not allowed to data assign to other value

//! ----------------------------- Enums -----------------------------

// allow some type not others may it's custom type
enum Role {
  Admin, //default 0  may custom this value like roleName=1 and other way roleName = "String Value"
  Editor, // 1
  Guest, // 2
}

let userRole: Role = Role.Admin;

// alternative to enum literal type most popular

let updatedRole: "Admin" | "Editor" | "Guest" = "Admin";
