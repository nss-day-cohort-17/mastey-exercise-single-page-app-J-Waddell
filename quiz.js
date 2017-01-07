//car inventory
// var allCars = 0;
// // loading the car inventory
// function loadCarInventory(e) {
//         var data = JSON.parse(e.target.responseText).name
//         console.log("data", data);
//         var carContent = ""
//         for(var i = 0; i < data.cars.length; i++) {
//           carContent +=
//           `<li id="${allCars}"><span>${data.cars[i].make}${data.cars[i].model}${data.cars[i].year}${data.cars[i].description}</span></li>`
//         }
//     document.getElementById('carList').innerHTML = carContent
// }
// // linking json with the DOM
// var JSONRequest = new XMLHttpRequest()
// JSONRequest.addEventListener("load", loadCarInventory)
// JSONRequest.open("GET", "inventory.json")
// JSONRequest.send()

function Car() {
    this.manufacturedDate = Date.now()
}

function Ford() {
    this.manufacturer = 'Ford'
}

Ford.prototype = new Car();

function Mustang (color, horsepower, torque) {
    this.color = color;
    this.horsepower = horsepower;
    this.torque = torque;
}

Mustang.prototype = new Ford();

var firstCar = new Mustang('Blue', 526, 429);
firstCar.plateNumber = "Venomouz";

