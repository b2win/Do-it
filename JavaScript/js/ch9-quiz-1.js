var large = 24000;

var add = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = large + "원";


for(i = 0; i < add.length; i++) {
	add[i].onclick = function() {
		if(this.checked == true) {
			large += this.value;
		} else {
			large -= this.value;
		}
		total.value = large + "원";
	}
}