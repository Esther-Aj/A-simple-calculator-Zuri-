let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let operator = prompt("Enter an operator ( + - * /)");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;

if (operator == "+") {
  result = num1 + num2;
} 
else if (operator == "-") {
  result = num1 - num2;
} 
else if (operator == "*") {
  result = num1 * num2;
} 
else if (operator == "/") {
  result = num1 / num2;
}
alert("The result is: " + result);
console.log("The result is: " + result);

/*
if(operator== "+") {
    
alert("The result is: " + num1 + num2)
console.log(num1 + num2)

}
else if(operator== "-"){
    alert(num1 - num2)
}
else if(operator== "/"){
    alert(num1 / num2)
}
else if(operator== "-"){
    alert(num1 * num2)
}*/
