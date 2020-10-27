var storedValue = 0;
var operationValue;
var screen = document.getElementById("result");

function clear(){
    screen.innerHTML = "0"
    operationValue = "";
}

function setNum(number){
    if(screen.innerHTML == "0"){
        screen.innerHTML = number
    } else {
        screen.innerHTML += number
    }
}

function setOperation(operation){
    storedValue = parseInt(screen.innerHTML);
    operationValue = operation;
    screen.innerHTML = "0";
}

function calculate(){
    operand = parseInt(screen.innerHTML)
    if(operationValue == "+"){
        screen.innerHTML = storedValue + operand
    } else if(operationValue == "-"){
        screen.innerHTML = storedValue - operand
    } else if(operationValue == "×"){
        screen.innerHTML = storedValue * operand
    } else if(operationValue == "÷"){
        screen.innerHTML = storedValue / operand
    }
    operationValue = "";
}

function backspace(current){
    if(screen.innerHTML.length == 1){
        screen.innerHTML = "0"
    } else {
        console.log("string: " + screen.innerHTML.slice(0, -1))
        screen.innerHTML = screen.innerHTML.slice(0, -1)
    }
}

var numbers = document.getElementsByClassName("num")
var operations = document.getElementsByClassName("operation")

for(var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(event){
        setNum(event.target.innerHTML)
    });
}

for(var i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function(event){
        setOperation(event.target.innerHTML)
    });
}

document.getElementById("equals").addEventListener("click", calculate);

document.getElementById("backspace").addEventListener("click", function(event){
    backspace(event.target.innerHTML)
});

document.getElementById("clear").addEventListener("click", clear);