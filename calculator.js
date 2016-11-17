"Use Strict";
alert("MATH TIME");

let firstNumber;
let Operator;
let secondNumber;
let total;
let newTotal;
firstNumber = Number(prompt("Pick a number."));
Operator = prompt("Pick + or - or * or / or **");
secondNumber = Number(prompt("Pick a second number."));





switch(Operator){
	case "+":
	total = firstNumber + secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;

	break;

	case "-":
	total = firstNumber - secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "*":
	total = firstNumber * secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "/":
	total = firstNumber / secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "**":
	total = firstNumber ** secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	default:
	console.log("How did you mess up using a calculator?");

}

function doItAgain(){
	firstNumber = Number(prompt("Pick a number."));
	Operator = prompt("Pick + or - or * or / or **");
	secondNumber = Number(prompt("Pick a second number."));
}


switch(Operator){
	case "+":
	total = firstNumber + secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;

	break;

	case "-":
	total = firstNumber - secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "*":
	total = firstNumber * secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "/":
	total = firstNumber / secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	case "**":
	total = firstNumber ** secondNumber;
	console.log(total);
	document.getElementById("screenTotal").innerHTML = total;
	break;

	default:
	console.log("How did you mess up using a calculator?");

// function memoryButton(){
//     newTotal
//   }
//
// }

// let calculator = {
// 	add: function(){
// 		x = a + b
// 	},
// 	subtract: function(){
// 		x = a - b
// 	},
// 	divide: function(){
// 		x = a / b
// 	},
// 	multiply: function(){
// 		x = a * b
// 	},
// 	exponents: function(){
// 		x = a ** b
// 	},
// }




// calculator();
