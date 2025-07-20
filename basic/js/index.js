// "use strict";
// union type
var age; //* age variable allow to String and number "|" = pipe symbols;
//! ----------------------------- array object -----------------------------
// let hobbies: string[] = ["sport", "cooking"];
var hobbies = ["sport", "cooking"];
//! hobbies.push(15); // not allowed
// let users: (string | number)[]; //* users array allow string or number;
var users; //* alternative generic type;
var possibleResult; //* tuple type other example let possibleResult: [number, strings]
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
var val = "abc"; //! won't allowed null and undefined value
//* here record force to use data is a object and keys are string and values are should string or number
var data;
// data = "abc" //! now you are not allowed to data assign to other value
