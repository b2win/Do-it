var num1 = prompt("첫번째 숫자를 입력하세요!");
var num2 = prompt("두번째 숫자를 입력하세요!");

	if(num1 == num2) {
		document.write(num1 + "와(과) " + num2 + "이(가) 같습니다!")
	} else if(num1 > num2) {
		document.write(num1 + "이(가) " + num2 + "보다 큽니다!")
	} else {
		document.write(num2 + "이(가) " + num1 + "보다 큽니다!")
	};
