// var checkbox = document.querySelectorAll(".check")[0];
// checkbox.addEventListener('click', function() {
// 	document.querySelectorAll("li")[0].style.color = "#ccc";
// 	document.querySelectorAll('.check')[0].style.color = "black";
// });

// var checkbox = 0
// for(i = 0; i < checkbox.length; i++) {
// 	checkbox[i].onclick = change;
// 	function change() {
// 		document.querySelectorAll("li")[i].style.color = "#ccc";
// 		document.querySelectorAll('.check')[i].style.color = "black";
// 	}
// };

var checkbox = document.querySelectorAll(".check");
	for (i = 0; i < checkbox.length; i++) {
	checkbox[i].addEventListener('click', function() {
		this.parentNode.style.color = "#ccc";
		this.style.color = "black";
	});
}


checkbox = document.querySelectorAll(".check");
	for (i = 0; i < checkbox.length; i++) {
	checkbox[i].addEventListener('dblclick', function() {
		this.parentNode.style.color = "black";
		this.style.color = "#ccc";
	});
}
