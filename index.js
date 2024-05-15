"use strict";
//strongly typed syntax
function add_number(a, b) {
    return a + b;
}
let funtion_output = add_number(5, "8");
// Type error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(funtion_output);
let person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
