let one = document.getElementById("first-number");
let two = document.getElementById("second-number");
let result = document.getElementById("result");

function updateResult(value) {
    result.innerHTML = String(value);
    result.style.color = value < 0 ? "red" : "black";
}

function addition() {
    updateResult(Number(one.value) + Number(two.value));
}

function subtract() {
    updateResult(Number(one.value) - Number(two.value));
}

function multiply() {
    updateResult(Number(one.value) * Number(two.value));
}

function power() {
    let base = Number(one.value);
    let exponent = Number(two.value);
    let powerResult = 1;
    
    for (let i = 0; i < exponent; i++) {
        powerResult = powerResult * base;
    }
    
    updateResult(powerResult);
}

function divide() {
    updateResult(Number(one.value) / Number(two.value));
}

function clear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("result").innerHTML = "";
    result.style.color = "black";
}