console.log("events.js loaded");

var Carlot = (function (object) {
		var card;
	object.activateEvents = function () {
		console.log("activate events activated");
		var list = document.getElementsByClassName("card");
		
		
		console.log("list", list);
		for (n=0;n<list.length;n+=1) {
			card = list[n];
			card.addEventListener("click", function (event) {
				console.log("list[n]", card);
				object.highlighter(event.currentTarget.id);
			});
			
		};
		// for (i=0; i<cardID.length; i+=1) {
		// 	console.log("greg's log", cardID[i]);
		// 	var stuff = document.getElementById(`"${cardID[i]}"`);
		// 	stuff.addEventListener("click", function () {
		// 		ID = cardID[i];
		// 		console.log("ID",ID, cardID[i]);
		// 		object.highlighter(ID);
		// 	});
		// }

			//.addEventListener("click", function(event) {
			//	console.log("what am i clicking?", this);

		}
		// productPage.addEventListener("click", function(event) {
		// 	console.log("click target", event.target.parentElement.parentElement.id);
		// 	console.log("this", this);
		// 	//console.log("click target", event.target.querySelector(".card"));
		// 	cardID = event.target.parentElement.parentElement.id;
		// 	
		// 	console.log("ID", cardID);
		// 	
		// 	console.log("number?",typeof cardID);
		// 	

		


	return object;

})(Carlot || {});