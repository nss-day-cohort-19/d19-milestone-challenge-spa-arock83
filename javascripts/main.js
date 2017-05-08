console.log("main.js loaded");

Carlot.loadInventory(Carlot.populatePage);
Carlot.activateEvents();

//Carlot.populatePage(Carlot.loadInventory);
// var productPage = document.getElementById("productPage");

// var getCars = new XMLHttpRequest;
// var carList = [];
// getCars.addEventListener("load", loadSuccess);
// getCars.addEventListener("error", loadError);

// getCars.open("GET", "inventory.json");
// getCars.send();

// function loadSuccess(event) {
// 	console.log("inventory.json loaded successfully");
// 	carList = JSON.parse(this.responseText).cars;
// 	console.log("Parsed Dataset: ", carList);
// 	populatePage(carList);
// }

// function loadError(event) {
// 	console.log("inventory.json failed to load");

// }

// function populatePage(array) {
// 	console.log("populatePage starts");
// 	var rowCounter = 0;
// 	var page = `<div class="row container-fluid">`;
// 	console.log("row div opened");
// 	for (n=0; n<array.length; n+=1) {
// 		//console.log("population loop counter: ", n);
// 		if (rowCounter === 3) {
// 			page += `</div>`;
// 			console.log("rox div closed");
// 			if(n!=(array.length-1)) {
// 				page += `<div class="row container-fluid">`;
// 				console.log("row div opened");
// 				rowCounter = 1;
// 			}
// 		} else {
// 			rowCounter +=1;
// 		}
// 		console.log("Card Produced: ", n+1);
// 		page += 	`<div class="col carcard">
// 						<div class="card">
// 							<div class="card-block">
// 								<h4 class="card-title">`+array[n].name+`</h4>
// 								<p class="card-text">`+array[n].description+`</p>
// 							</div>
// 							<ul class="list-group list-group-flush">
//     							<li class="list-group-item">`+array[n].year+`</li>
//     							<li class="list-group-item">`+array[n].price+`</li>
//     						</ul>
//     					</div>
// 					</div>`;
// 	}
// 	page += `</div>`;
// 	console.log("row div closed");
// 	productPage.innerHTML = page;


// }

