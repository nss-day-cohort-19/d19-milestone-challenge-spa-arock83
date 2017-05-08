console.log("CarLot.js loaded");

var Carlot = (function (object) {
  var inventory = [];
  object.loadInventory = function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });
      inventoryLoader.addEventListener("error", function() {
        console.log("inventory.json failed to load");
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      console.log("inventory", inventory);
      

    }
  object.getInventory = function () {
      return inventory;
    }
  object.populatePage = function (array) {
        console.log("populatePage starts", inventory);
        var productPage = document.getElementById("productPage");
        var rowCounter = 0;
        var page = `<div class="row container-fluid">`;
        for (n=0; n<array.length; n+=1) {
          //console.log("population loop counter: ", n);
          if (rowCounter === 3) {
            page += `</div>`;
            if(n!=(array.length-1)) {
              page += `<div class="row container-fluid">`;
              rowCounter = 1;
            }
          } else {
            rowCounter +=1;
          }
          page +=   `<div class="col carcard">
                  <div class="card" id="car--${n}">
                    <div>
                      <img class="card-img-top" src="`+array[n].image+`" alt="`+array[n].name+`">
                    </div>
                    <div class="card-block">
                      <h4 class="card-title}">`+array[n].name+`</h4>
                      <p class="card-text" id="desc--${n}">`+array[n].description+`</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">`+array[n].year+`</li>
                        <li class="list-group-item">`+array[n].price+`</li>
                      </ul>
                    </div>
                </div>`;
        }
        page += `</div>`;
        productPage.innerHTML = page;
        Carlot.activateEvents();
      }
      return object;
})(Carlot || {});