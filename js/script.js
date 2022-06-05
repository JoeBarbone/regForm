// var formHandlerEl = document.querySelector("#form-input");
var buttonSaveEl = document.querySelector("#save-info");
var buttonClearEl = document.querySelector("#clear-info");


var buttonHandler = function(event) {
    event.preventDefault();

    var clickedButton = event.target.dataset.role;

    if (clickedButton === "save") {
        saveData();
    } else {
        clearData();
    }

}

var saveData = function() {

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;

    var make = document.getElementById("make").value;
    var model = document.getElementById("model").value;
    var serialNum = document.getElementById("serial-number").value;

    var regObj = {
        fn: firstName,
        ln: lastName,
        mk: make,
        md: model,
        sn: serialNum
    }

    localStorage.setItem("regData",JSON.stringify(regObj));

}


var clearData = function() {
   var regObj  = {
       fn: "",
       ln: "",
       mk: "",
       md: "",
       sn: ""
   };

   localStorage.setItem("regData",JSON.stringify(regObj));

   loadData();
}


var loadData = function() {
    var getData = JSON.parse(localStorage.getItem("regData"));

    document.getElementById("first-name").value = getData.fn;
    document.getElementById("last-name").value = getData.ln;
    document.getElementById("make").value = getData.mk;
    document.getElementById("model").value = getData.md;
    document.getElementById("serial-number").value = getData.sn;


}


loadData();
// formHandlerEl.addEventListener("click", buttonHandler);
buttonSaveEl.addEventListener("click", buttonHandler);
buttonClearEl.addEventListener("click", buttonHandler);