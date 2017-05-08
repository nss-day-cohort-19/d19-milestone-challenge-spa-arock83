console.log("events.js loaded");

var Carlot = (function (object) {
	var carClicker = document.getElementsByClassName("");
	object.activateEvents = function () {
		console.log("activate events activated");
		carClicker = document.getElementsByClassName("");
		productPage.addEventListener("click", function(event) {
			console.log("click target", event.target.parentElement.parentElement.id);
			cardID = event.target.parentElement.parentElement.id;
			cardID = cardID.replace("car--", "");
			console.log("ID", cardID);
			cardID = Number(cardID);
			object.highlighter(cardID);

		});

	}
	return object;

})(Carlot || {});