"use strict";

let obj = {};
obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;
console.log(obj);

let id = Symbol("id");

let userS = {
	name: "John",
};
userS[id] = 123;
console.log(userS);
console.log(userS[id]);