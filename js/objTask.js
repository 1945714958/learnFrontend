"use strict";

let obj = {};
obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;
console.log(obj);

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // 而不是 "id"：123
};

console.log(user);