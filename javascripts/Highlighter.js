console.log("Highlighter.js loaded");

var Carlot = (function (object) {

		object.highlighter = function (id) {
			object.dehighlighter();
			console.log("highlighter id", id);
			var selected = document.getElementById(id);
			console.log("selected", selected);
			selected.classList.add("highlighted");
			var edit = document.getElementById("edit");
			var editBtn = document.getElementById("editBtn");
			edit.focus();
			var index = id.replace("car--", "");
			console.log("index", index);
			var desciption = document.getElementById(`desc--`+index)
			editBtn.addEventListener("click", function(event) {
				desciption.innerHTML = edit.value;
			});
		}
		object.dehighlighter = function() {
			var list = document.getElementsByClassName("card");
			//console.log(list);
			for (n=0;n<list.length;n+=1) {
				
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