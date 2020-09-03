var text = document.querySelector('#myText'); //클릭시
text.addEventListener('click', function() {
	text.style.backgroundColor = "#ccc";
	text.style.fontSize = "20px";
	text.style.color = "blue";
});

text = document.querySelector('#myText'); // 포인터 제거시
text.addEventListener('mouseout', function() {
	text.style.backgroundColor = "";
	text.style.fontSize = "";
	text.style.color = "";
});
