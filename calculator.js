function updateResult(value) {
    const result = document.getElementById("result");
    result.innerHTML = String(value);
    result.style.color = value < 0 ? "red" : "black";
}

function addition() {
    const one = document.getElementById("first-number");
    const two = document.getElementById("second-number");
    updateResult(Number(one.value) + Number(two.value));
}

function subtract() {
    const one = document.getElementById("first-number");
    const two = document.getElementById("second-number");
    updateResult(Number(one.value) - Number(two.value));
}

function multiply() {
    const one = document.getElementById("first-number");
    const two = document.getElementById("second-number");
    updateResult(Number(one.value) * Number(two.value));
}

function power() {
    const one = document.getElementById("first-number");
    const two = document.getElementById("second-number");
    let base = Number(one.value);
    let exponent = Number(two.value);
    let powerResult = 1;
    
    for (let i = 0; i < exponent; i++) {
        powerResult = powerResult * base;
    }
    
    updateResult(powerResult);
}

function divide() {
    const one = document.getElementById("first-number");
    const two = document.getElementById("second-number");
    updateResult(Number(one.value) / Number(two.value));
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.color = "black";
}