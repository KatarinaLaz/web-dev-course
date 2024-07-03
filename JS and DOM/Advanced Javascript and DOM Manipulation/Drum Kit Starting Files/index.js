/*
    document.querySelector("button").addEventListener("click", handleClick);
    
    *** no paranthesis on the "handleClick" method -
    if we use parenthesis we are doing a method call straight away and the event will happen without the trigger ("click" in this example) -
    this is passing the function as an input so that it can be called some other time -
    we can use anonymous functions in this case as well (line 18)

    function handleClick() {
        alert("I got clicked!");
    }

*/

var drumButtons = document.querySelectorAll(".drum");

for(var button of drumButtons) {
    button.addEventListener("click", function () {      // - this is an anonymous function (it doesn't have a name)
        alert("I got clicked!");
    });
}

/* 

    How to use functions as inputs for other functions:

        function add(num1, num2) {
            return num1 + num2;
        }

        function multiply(num1, num2) {
            return nume1 * num2;
        }

        function calculator(num1, num2, operator) {  - functions that can take other functions as inputs are called higher order functions
            return operator(num1, num2);
        }

        When we call this function it should look something like:

        calculator(4, 5, add);
        calculator(4, 5, multiply);

*/
