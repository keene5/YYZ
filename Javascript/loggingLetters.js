var sentence = "I love learning software development";
 
for (var i=0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}

confirm("Do you like cake?");

prompt('What is your favorite band?');


alert("This is a message alert");


console.info("This is console info");//view console for this


var likesCake = confirm("Do you like cake?");
// If the user likes cake, 
// Ask for their favorite cake
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is 
    // whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");}
	
	function sayHello() {
    alert('hi');
}

function sayHello(myName) {
    alert('Hello, ' + myName);
}
function sayHello(myName) {
    alert('Hello, ' + myName);
}
 
sayHello('Mr. Grinch');

function addTwoNumbers(firstNum, secondNum){
  return firstNum + secondNum;
}

// Create two variables that we want to add
var num1 = 42;
var num2 = 40;

// Call our function that takes in two numbers
// Store the return result in a variable named "sumOfNums"
var sumOfNums = addTwoNumbers(firstNum, secondNum);

// Display the sum in a message box
alert("The sum of " + num1 + " and " + num2 +
      " is " + sumOfNums);
We could also update our sayHello method to return the greeting to us, as seen in the following code:

// Updating sayHello to return the greeting
function sayHello(myName) {
    return 'Hello, ' + myName;
}

// Get the return value and store it in a variable
var hiBob = sayHello("Bob");

// Display a message box with the greeting
alert(hiBob);


