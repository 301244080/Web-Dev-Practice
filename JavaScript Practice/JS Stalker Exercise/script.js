var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
var fullName = firstName + " " + lastName;

var days = age * 365.25;

console.log("Your full name is " + fullName);
console.log("You are " + age + " years old");
alert(age + " years is roughly " + days + " days");