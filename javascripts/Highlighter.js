console.log("Highlighter.js loaded");

var Carlot = (function (object) {

		object.highlighter = function (index) {
			if (isNaN(index)) {

			} else {
				object.dehighlighter();
				var selected = document.getElementById("car--"+index);
				selected.classList.add("highlighted");
			}
		}
		object.dehighlighter = function() {
			var list = document.getElementsByClassName("card");
			//console.log(list);
			for (n=0;n<list.length;n+=1) {
				console.log(n);
				list.item(n).classList.remove("highlighted");
			}
			
			// for(n=0; n<list.length; n+=1) {
			// 	console.log(n);
			// 	var cards = document.getElementById("car--"+n);
			// 	cards.classList.remove("highlighted");
			// }
		}
	return Carlot;

})(Carlot || {});