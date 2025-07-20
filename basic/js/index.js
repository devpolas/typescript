// "use strict";
// union type
var myAge; //* age variable allow to String and number "|" = pipe symbols;
myAge = 28;
//! ----------------------------- array object -----------------------------
var hobbies = ["sport", "cooking"];
var myHobbies = ["sport", "cooking"];
// //! hobbies.push(15); // not allowed
var users; //* users array allow string or number;
var myUsers; //* alternative generic type;
var possibleResults; //* tuple type other example let possibleResult: [number, strings]
//! ----------------------------- object -----------------------------
// let user = {
//   name: "Polas", //* on hover over the object show the default inferred object type
//   age: 28,
// };
var user = {
    name: "Polas",
    age: 28,
    hobbies: ["sport", "cooking"],
    role: {
        description: "This is description",
        id: 5,
    },
};
var someValue = "abc"; //! won't allowed null and undefined value
// flexible object with built-in typescript Record
//* here record force to use data is a object and keys are string and values are should string or number
var SomeData;
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
var updatedRole = "Admin";
//! ----------------------------- function -----------------------------
// function add(a: number, b: number): number {
//!   //(ValueType, ValueType):Return Type
//   return a + b;
// }
function add(a, b) {
    //(ValueType, ValueType):Return Type
    return a + b;
}
// void Function
function log(message) {
    //(ValueType):void //!nothing return anythings
    console.log(message);
}
// never return
function throwError(errMessage) {
    //(ValueType):never //!nothing return anythings
    console.log(errMessage);
    throw new Error(errMessage);
}
// in the common javascript function may have a function value, this is common;
//how to define that
function jobDone(cb) {
    //execute the function like express middleware next function
    cb("this is value!");
}
var currentUser = {
    name: "Polas",
    age: 28,
    greet: function () {
        console.log("this is the void functions");
    },
};
