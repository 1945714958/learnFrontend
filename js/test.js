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