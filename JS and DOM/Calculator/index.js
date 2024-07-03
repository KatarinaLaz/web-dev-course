var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var divide = document.querySelector("#divide");
var multiply = document.querySelector("#multiply");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var ce = document.querySelector("#ce");
var back = document.querySelector("#back");
var dot = document.querySelector("#dot");
var equals = document.querySelector("#equals");
var input = document.querySelector("input");

var nums = document.querySelectorAll(".num");
var saves = document.querySelectorAll(".save");

var num1 = 0;
var num2 = 0;
var operator = "";

for(const num of nums) {
    num.addEventListener("click", function() {
        if (input.value == 0) {
            input.value = "";
        }
        input.value = input.value + num.innerHTML;
    });
}

for(var save of saves) {
    save.addEventListener("click", function () {
        num1 = input.value;

        if(save.id == "divide") {
            operator = divide;
        } else if (save.id == "multiply") {
            operator = multiply;
        } else if (save.id == "minus") {
            operator = substract;
        } else {
            operator = add;
        }

        input.value = 0;
    });
}

equals.addEventListener("click", function() {
    num2 = input.value;

    input.value = calculate(num1, num2, operator);
});

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operator) {
    return operator(num1, num2);
}