// Function=>it is a basically a group of statements which perform specific task /operation.
// Why Using function=> It allows us to reuse the code and it is easy to debug our
// It divides a big program into smaller parts and we can achieve modular programing 

// Function is a 2 step process:

// 1.creating or defining or declaring the function
// 2.calling or a function /invoking

// different type of function 

//1. defining or declaring
/*function getCall() {
    //body of the function
    console.log("Welcome to function");
    alert("Welcome to function");\
    }*/

//2. FUnction calling or invoking
 
  2.1 /*function sayWelcome(name) {
    console.log("Hi. i am " + name);
  }
   //call this function
  sayWelcome("Ajay");
  sayWelcome("Sathwick");
  sayWelcome("sanuja");
  sayWelcome("Guvi");  COde reusability */

 2.2 /* function calculate_Addition(number1, number2) {
    
    let add = number1 + number2;
    let mul = number1 * number2;
    let div = number1 / number2;
    let mod = number1 % number2;
   console.log(add, mul, div, mod);
    //   console.log(mul);
    //   console.log(div);
    //   console.log(mod);
  }
  
  calculate_Addition(5, 10);
  calculate_Addition(50, 100);
  calculate_Addition(100, 200);*/

 // ES6
// 3. Passing default values for function parameters and
// function callPerson(name = "Lavish") {
//   console.log(name);
// }

// callPerson();
// callPerson("Pavish");

 3.1 //function getPerimeter_Rectangle(length = 2, breadth = 4) {
//   peri = 2 * (length + breadth);
//   console.log(peri); //12 ,60
// }

// getPerimeter_Rectangle();
// getPerimeter_Rectangle(10, 20);

4. //Return type Function(Function returning values)
// A function is able to return the values to the script from where it is called.
// (caller function).

// return statement 
// 2.It should always be placed at the last line of your code.

// function get_sum(num1,num2){
//     var mult=num1*num2
//     return mult
// }
// var result=get_sum(5,6)
// console.log(result)


5. // IIFE=> Immediately invoked function expression
// syntax of anonymous function
 //(function(){})()  // A function without name is generally known as anonymous function.

// (function (para) {
//     console.log("Welcome to Anonymous function" + para);
//   })("guvi");

6.// Arrow function(=>)big fat arrow

// var addarrowfun = (num1, num2) => num1 + num2;
// console.log(addarrowfun(10, 20));

6.1//single parameter variation of arrow functional function  =>
/*var text = (name) => console.log("I am " + name);
text("Lavish");

6.2 //Multiple parameter and single values
var multiply = (num1, num2) => num1 * num2;
console.log(multiply(10, 20));

6.3//single parameter and multiple statements
//check for number if it is even or odd

var even = (number) => {
  ///Logic
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

even();

6.4// Mutliple parameter and multiple statement
 1.//let multiple = (num1, num2) => {
  //use return statements to print the data

  if (num1 == 5 && num2 == 7) return true;
  return false;
};

console.log(multiple(7, 7))

 2//multiple = (num1, num2) => {
  //use return statements to print the data

  if (num1 == 5 || num2 == 7) {
    if (num1 == 10) console.log("nested if ");
    else console.log("Else of nested if ");
  }
  return "Lavish"; //lavish is independent
};

console.log(multiple(5, 7));*/





  


