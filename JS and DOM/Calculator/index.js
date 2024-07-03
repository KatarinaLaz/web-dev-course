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
var equals = document.querySelector("#input");
var input = document.querySelector("input");

var nums = document.querySelectorAll("num");

for(const num of nums) {
    num.addEventListener("click", function() {
        input.innerHTML = input.innerText + num;
    })
}