var divi = document.querySelector("#divi");
var multi = document.querySelector("#multi");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var ce = document.querySelector("#ce");
var back = document.querySelector("#back");
var equals = document.querySelector("#equals");
var input = document.querySelector("input");

var nums = document.querySelectorAll(".num");

var num1 = 0;
var num2 = 0;
var operate;

for(const num of nums) {
    num.addEventListener("click", function() {
        if (input.value == 0) {
            input.value = num.innerHTML;
        } else {
            input.value = input.value + num.innerHTML;
        }
    });
}

divi.addEventListener("click", function() {
    num1 = input.value;

    operate = divide;

    input.value = 0;
});

multi.addEventListener("click", function() {
    num1 = input.value;

    operate = multiply;

    input.value = 0;
});

plus.addEventListener("click", function() {
    num1 = input.value;

    operate = add;

    input.value = 0;
});

minus.addEventListener("click", function() {
    num1 = input.value;

    operate = substract;

    input.value = 0;
});

back.addEventListener("click", function() {
    input.value = Math.floor(input.value / 10);
});

equals.addEventListener("click", function() {
    num2 = input.value;

    input.value = calculate(num1, num2, operate);
});

ce.addEventListener("click", function () {
    input.value = 0;
    num1 = 0;
    num2 = 0
});

function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function substract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function calculate(num1, num2, operator) {
    return operator(num1, num2);
}