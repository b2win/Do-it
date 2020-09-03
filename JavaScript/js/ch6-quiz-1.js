var num1 = prompt("첫번째 숫자를 입력하세요!");
var num2 = prompt("두번째 숫자를 입력하세요!");
num1 = Number(num1);
num2 = Number(num2);
var sum = num1 + num2;

if(num1 === num2) {
	document.write(num1 * num2)
} else {
	document.write(num1 + num2)
};


// var x = prompt("첫번째 숫자를 입력하세요!");
// var y = prompt("두번째 숫자를 입력하세요!");

// x = Number(x);
// y = Number(y);


// function sumMulti(x, y) {
// 	if (x == y) return x * y;
// 	else return x + y;
// }

// document.write(sumMulti(x, y));