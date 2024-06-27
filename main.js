// //1
// var arr = [1, 2, 3, 4, 5]
// var map1 = arr.map((x) => x * x);

// console.log(map1);

// //2
// var arr1 = [1, 4, 9, 16, 25]
// var map1 = arr1.filter((x) => x > 10);

// console.log(map1);

//3
// const str = ["tala", "khaled", "Mahmoud", "rama"]
// str.forEach(function (element) {
//     const forEach = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     console.log(forEach);
//     console.log(element.toUpperCase())
// });

//4
// const people = [
//     { name: "tala", age: 21 },
//     { name: "rama", age: 18 },
//     { name: "khaled", age: 55 },
//     { name: "Mahmoud", age: 28 }
// ];
// const names = people.map(person => person.name);
// console.log(names);

//5
// const people = [
//     { name: "tala", age: 21 },
//     { name: "rama", age: 18 },
//     { name: "khaled", age: 55 },
//     { name: "Mahmoud", age: 28 }
// ];
// const age = people.filter(person => person.age > 20)

// console.log(age);

//6
// const int = [11, 7, 4, 8, 10]
// let sum = 0;
// int.forEach(number => {
//     sum += number;
// })
// console.log(sum);

//7

// const string = ["hello", "world", "javascript"]
// const reverse = string.map(function (element) {
//     return element.split("").reverse().join("");
// });

// console.log(reverse);

//8

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const prime = numbers.filter(function (number) {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return number > 0;
// });

// console.log(prime);

//9
// const boolean = [true, false, true, false, true];
// boolean.forEach((element, index) => {
//     console.log("element", "index");
// });

//10
// const num = [10, 20, 30, 40, 50]
// function numstr(number) {
//     return String(number);
// };
// const strnum = num.map(numstr)
// console.log(strnum);

//11
// const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5]
// function unique(value, index, array) {
//     return arr.indexOf(value) === index;
// }
// const uniquearr = arr.filter(unique)
// console.log(uniquearr);


//12
// const objarr = [
//     { name: "hind", age: 30 },
//     { name: "dania", age: 25 },
//     { name: "ban", age: 35 }
// ];
// function printObj(object) {
//     for (let key in object)
//         console.log(object[key]);
// }
// objarr.forEach(printObj);

//13
// let Stringarr = ["hello", "world", "javascript"]
// function unique(value, index) {
//     return value + index
// }
// String = Stringarr.map(unique)
// console.log(String);

//14
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const even = numbers.filter(function (x) {
//     return x % 2 == 0;
// })

// console.log(even);

//15
// let arr = [1, 3, 6, 9, 4, 2,]
// arr.forEach(function (element) {
//     const forEach = element * 2
//     console.log(forEach);
// });
//16
// const numbers = [10, 20, 30, 40, 50];
// const array = numbers.map((number, index) => number + index);
// console.log(array);
//17
// const items = [
//     { name: 'item1', value: 3 },
//     { name: 'item2', value: 7 },
//     { name: 'item3', value: 5 },
//     { name: 'item4', value: 10 },
//     { name: 'item5', value: 2 }
// ];
// const filteredItems = items.filter(item => item.value > 5);
// console.log(filteredItems);
//18
// const strings = ["apple", "banana", "orange", "kiwi"];
// strings.forEach(str => {
//     console.log(`${str.length}`);
// });
//19
// const strings = ["apple", "banana", "orange", "kiwi"];
// const Strings = strings.map(str => str.toUpperCase());
// console.log(Strings);
//20
// const numbers = [10, 20, 30, 40, 50];
// numbers.forEach(num => {
//     const divided = num / 2;
//     console.log(divided);
// });
//40
// function higher(func, number) {
//     return function (num) {
//         const test = [1, 3, 2, 6, 7];
//         result test = (func + number);
//     }
// }
// test = (num) => num + 2;
// let adder = higher(test, 3)
// console.log(adder);