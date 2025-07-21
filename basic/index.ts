// "use strict";

// union type

let myAge: string | number; //* age variable allow to String and number "|" = pipe symbols;
myAge = 28;
//! ----------------------------- array object -----------------------------

let hobbies: string[] = ["sport", "cooking"];
let myHobbies = ["sport", "cooking"];

// //! hobbies.push(15); // not allowed

let users: (string | number)[]; //* users array allow string or number;

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
// SomeData = "abc"; //! now you are not allowed to data assign to other value

//! ----------------------------- Enums -----------------------------

// allow some type not others may it's custom type
// enum Role {
//   Admin, //default 0  may custom this value like roleName=1 and other way roleName = "String Value"
//   Editor, // 1
//   Guest, // 2
// }

// let userRole: Role = Role.Admin;

// alternative to enum literal type most popular

let updatedRole: "Admin" | "Editor" | "Guest" = "Admin";

// //!custom type or alias type
type Role = "admin" | "editor" | "guest" | "reader" | "user";
// object custom type
type typeObj = {
  name: string;
  age: number;
  role: Role;
};

//! ----------------------------- function -----------------------------

// function add(a: number, b: number): number {
//!   //(ValueType, ValueType):Return Type
//   return a + b;
// }

function add(a: number, b: number) {
  //(ValueType, ValueType):Return Type
  return a + b;
}

// void Function
function log(message: string) {
  //(ValueType):void //!nothing return anythings
  console.log(message);
}

// never return
function throwError(errMessage: string): never {
  //(ValueType):never //!nothing return anythings
  console.log(errMessage);
  throw new Error(errMessage);
}

// in the common javascript function may have a function value, this is common;
//how to define that

function jobDone(cb: (msg: string) => void) {
  //execute the function like express middleware next function
  cb("this is value!");
}

// function defined on abject
type User = {
  name: string;
  age: number;
  greet: () => void; // declare the function return void type but defined also other type
};

const currentUser: User = {
  name: "Polas",
  age: 28,
  greet: () => {
    console.log("this is the void functions");
  },
};

//! ----------------------------- null and undefined -----------------------------
// combined with union type
let n: null | string;
let u: undefined | string;

//disable typescript end add ! symbol
// option chaining symbol added this sign ?

//! ----------------------------- unknown -----------------------------

function digest(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}

//! ----------------------------- nullish -----------------------------

let x = "";
const didProvide = x ?? false; // here x in undefined or null return false otherwise return empty string;
