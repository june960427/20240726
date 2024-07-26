// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   toString() {
//     return `이름: ${this.name}\n나이:${this.age}살`;
//   }
// }
// const pet = new Pet("구름", 6);
// alert(pet);
// console.log(pet + "");
// console.log(Number(true));

// const arr = [1, 1, 2, 3, 4, 5].filter((v) => v !== 1);

// console.log(arr);

// const arr2 = Array(3)
//   .fill()
//   .map((v, i) => i + 1);
// console.log(arr2);

// const arr3 = new Set("123123");
// console.log(arr3);

// const str = "asdew";

// console.log(str.split(""), Array.from(str), [...str]);

// const arrR = [5, 2, 3, 5, 4];
// arrR.reduce((prev, cur) => console.log(prev + cur));

console.log("str" + "str2");

const arr = ["mislav", "stanko", "mislav", "ana"];
const arr2 = ["stanko", "ana", "mislav"];

const arr3 = arr.sort().filter((v, i) => v !== arr2.sort()[i]);
console.log(arr3[0]);

const v = 0;
console.log(v.toFixed());
