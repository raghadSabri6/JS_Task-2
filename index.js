var moneyForm = document.querySelector(".moneyForm");
var result = document.querySelector(".result");

moneyForm.onsubmit = function(e) {
    e.preventDefault();
    var amount = document.getElementById("amount").value;
    var exchange = document.querySelector(".exchange").value;
    var convertedAmount = amount;

    if (exchange == "dollar") {
        convertedAmount = amount * 3.64;
    } else if (exchange == "dinar") {
        convertedAmount = amount * 5.13;
    }

    result.textContent = "result: " + convertedAmount + " " + exchange;
};
