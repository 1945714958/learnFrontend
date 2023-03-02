"use strict";

let obj = {};
obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;
console.log(obj);

let id = Symbol.for("ids");

let userS = {
	name: "John",
};
userS[id] = 123;
console.log(userS);
console.log(userS[id]);
// 从全局注册表中读取
id = Symbol.for("ids");
console.log(id);
console.log(Symbol.keyFor(id));

obj = "0xF";
let n = +obj;
let m = -obj;
console.log(n);
console.log(m);