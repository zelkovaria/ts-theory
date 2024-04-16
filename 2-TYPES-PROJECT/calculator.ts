/**
 * Let's make a calculator 🧮
 */
type Calculate = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (state: Calculate, num1: number, num2: number) => {
  switch (state) {
    case "add":
      console.log(num1 + num2);
      break;
    case "substract":
      console.log(num1 - num2);
      break;
    case "multiply":
      console.log(num1 * num2);
      break;
    case "divide":
      console.log(num1 / num2);
      break;
    case "remainder":
      console.log(num1 & num2);
      break;
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
