var radius = document.querySelector("#radius");
var calc = document.querySelector("#start");

calc.addEventListener("click", function() {
  document.querySelector("#round").value = radius.value * Math.PI * 2;
  document.querySelector("#area").value = radius.value * Math.PI * radius.value;
});
