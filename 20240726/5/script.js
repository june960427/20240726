// let condition1 = true;
// let condition2 = false;
// let value = condition1
//   ? condition2
//     ? "둘 다 참"
//     : "condition1만 참"
//   : "condition1이 거짓";
// console.log(value);

let cond = true;
let value = "";
if (cond) {
  value = "참";
} else {
  value = "거짓";
}

// switch (cond) {
//   default:
//     value = "거짓";
//     break;
//   case true:
//     value = "참";
//     break;
// }

value = value ? "참" : "거짓";
console.log(value);
