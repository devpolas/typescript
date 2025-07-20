// "use strict";
// union type
var myAge; //* age variable allow to String and number "|" = pipe symbols;
myAge = 28;
//! ----------------------------- array object -----------------------------
// let hobbies: string[] = ["sport", "cooking"];
var myHobbies = ["sport", "cooking"];
//! hobbies.push(15); // not allowed
// let users: (string | number)[]; //* users array allow string or number;
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
// data = "abc" //! now you are not allowed to data assign to other value
//! ----------------------------- Enums -----------------------------
// allow some type not others may it's custom type
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
// alternative to enum literal type most popular
var updatedRole = "Admin";
