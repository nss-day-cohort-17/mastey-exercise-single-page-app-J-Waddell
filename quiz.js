// loading the car inventory
function loadCarInventory(loadEvt) {
        var data = JSON.parse(loadEvt.target.responseText)
        var HTMLString = ""
        for(var i = 0; i < data; i++) {
          HTMLString +=
          ''
        }
}
// linking json with the DOM
var JSONRequest = new XMLHttpRequest()
JSONRequest.addEventListener("load", loadCarInventory)
JSONRequest.open("GET", "inventory.json")
JSONRequest.send()
