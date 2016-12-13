//car inventory
var allCars = 0;
// loading the car inventory
function loadCarInventory(e) {
        var data = JSON.parse(e.target.responseText)
        console.log("data", data);
        var carContent = ""
        for(var i = 0; i < data.cars.length; i++) {
          carContent +=
          `<li id="${allCars}"><span>${data.cars[i].make}${data.cars[i].model}${data.cars[i].year}${data.cars[i].description}</span></li>`
        }
    document.getElementById('carList').innerHTML = carContent
}
// linking json with the DOM
var JSONRequest = new XMLHttpRequest()
JSONRequest.addEventListener("load", loadCarInventory)
JSONRequest.open("GET", "inventory.json")
JSONRequest.send()
