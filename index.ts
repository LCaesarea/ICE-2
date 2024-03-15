import prompt from "prompt-sync";
import { add, subtract, multiply, divide } from "./calculator";

const readInput = () => {
  const promptSync = prompt();
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const option = promptSync(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    let a = Number(promptSync(">> "));

    console.log("Enter the second number");
    let b = Number(promptSync(">> "));

    let c;
    switch(option){
      case "1": {
        c = add(a, b);
        console.log(`a + b = ${c}`);
      }
      break;

      case "2": {
        c = subtract(a, b);
        console.log(`a - b = ${c}`);
      }
      break;

      case "3": {
        c = multiply(a, b);
        console.log(`a * b = ${c}`);
      }
      break;

      case "4": {
        c = divide(a, b);
        console.log(`a / b = ${c}`);
      }
      break;
    }    

    readInput();
  }
}

readInput();

console.log("Thank you for using calculator. Good Bye");