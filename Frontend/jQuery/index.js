// $(document).ready(function() {
//     $("h1").css("color", "red")  - This is a safeguard if we include our scripts in the header in the index.html file - it waits for the document to load before applying the scripts
// })                               - We don't need this if we just put the scripts at the end of the <body> section in the index.html file

// ************************ STYLE MANIPULATION ***************************


$("h1").css("color", "red"); // The $(); is a shorthand for jQuery();, which is shorthand for document.querySelector(); and document.querySelectorAll();
// .css({css property}, {value}); - jQuery for changing an element's css
// .css({css property}); - gives us the value of the element's css property
//  DON'T CHANGE CSS INSIDE THE JAVASCRIPT CODE - Separation of concerns - JS should be about behavior, css should be about appearence, html should be about content
// In the case above - we can create a new css style class and apply it to the element(s) where we need it

$("h1").addClass("red-text"); // This is a better solution
$("h1").removeClass("red-text");

$("h1").addClass("red-text margin-50"); // Adding multiple classes

$("h1").hasClass("margin-50"); // Checks if an element has a class and returns a boolean



// ************************ TEXT MANIPULATION ***************************


$("h1").text("Bye."); // Changes the Original text ("Hello.") to say something else ("Bye.")
$("button").text("Don't click me"); // Updates the text for all buttons (document.querySelectorAll)

$("button").text("<em>Hey</em>"); // This results in <em>Hey</em> on all buttons
$("button").html("<em>Hey</em>"); // Same as element.innerHTML(); - This results is italicized Hey on all the buttons



// ************************ ATTRIBUTE MANIPULATION ***************************

// .attr({attribute name}, {value}) - we can set the value of an attribute
// .attr({attribute name})          - we can use this to get the attribute value

$("a").attr("href", "https://www.yahoo.com");

// IMPORTANT - classes are also html attributes

$("h1").attr("class"); // This would print out all of the classes assigned to the h1 element



// ************************ EVENT LISTENERS ***************************


$("h1").click(function() {
    $("h1").css("color", "purple");
});

// Adding listeners for multiple elements, previously done with the FOR loop

// Previously:

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// NOW- jQuery:

$("button").click(function() {        // jQuery will find all of the buttons and apply the listener to all of them without the nedd to go through the elements one by one
    $("h1").css("color", "purple");
});


$(document).keypress(function(event) { // This will update the h1 text to whatever key we press
    $("h1").html(event.key);
});

// There is an even easier way to add event listeners:

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});



// ************************ ADDING AND REMOVING ELEMENTS ***************************


// .before("{element that will be added before this one}") - Adds html element before this one
// .after("{element that will be added after this one}") - Adds html element after this one
// .prepend("{element that will be added after this one}") - Adds html element into this item, just after the opening tag
// .append("{element that will be added after this one}") - Adds html element into this item, just before the closing tag

$("h1").before("<button>New</buton>"); // <button>New</button> <h1>Hello</h1>
$("h1").after("<button>New</buton>"); // <h1>Hello</h1> <button>New</button>
$("h1").prepend("<button>New</buton>"); // <h1> <button>New</button> Hello</h1>
$("h1").append("<button>New</buton>"); // <h1>Hello <button>New</button> </h1>

// These do not negate each other and all of the newly created buttons will be visible

// $("button").remove(); // - Removes an element or several/all element from the web page



// ************************ ANIMATIONS *************************** https://www.w3schools.com/jquery/jquery_ref_effects.asp


$("button").on("click", function() {  // Animation that hides the selected element
    $("h1").hide();                   // .hide is very sudden, if we want a slower disappearence we can use fadeOut
});

$("h1").show(); // - Shows a hidden item - .show is very sudden, if we want a slower appearence we can use fadeIn

$("button").on("click", function() {    // This will not work while code in line 105-107 is there
    $("h1").toggle();                   // Toggles the presence of a button on/off - .toggle is very sudden, if we want a slower toggle we can use .fadeToogle
});

$("button").on("click", function() {
    $("h1").fadeOut();
});

$("button").on("click", function() { // Hides the element with a slide up animation
    $("h1").slideUp();
});

$("button").on("click", function() { // Shows the element with a slide in animation
    $("h1").slideDown();
});

// .slideUp() and .slideDown() are apparently useful for dropdowns


$("button").on("click", function() { // Allows us to define some custom css that we want to gradually animate towards, we can only add css rules that have a numeric value
    $("h1").animate({opaciti: 0.5}); // - this means that we cant animate to a color, for example (for size values it will default to pixels => {margin: 20} = margin: 20px)
});                                  // - we can use String percenteges, for example {margin: "20%"}

//   Chaining multiple animations:

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opaciti: 0.5}); // Animations will be done in order, not at the same time
});