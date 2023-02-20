'use strict';

let fruit = 'apple';
let bag = {
	[fruit + 'Computers']: 5 // bag.appleComputers = 5
};
bag.a = 1;
let name = 'zx';
let user = {
	name, age: 18
}
console.log(bag);

console.log(user);

let s = Symbol('aaaaa');
console.log(typeof s);

console.log(s);

// 从全局注册表中读取
let id = Symbol.for("id");
// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 symbol
alert( id === idAgain ); // true