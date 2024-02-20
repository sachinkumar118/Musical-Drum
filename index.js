// Get the number of drum buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button and add a click event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Get the inner HTML (letter) of the clicked drum button
    var buttonInnerHTML = this.innerHTML;

    // Call the makeSound function with the button's inner HTML
    makeSound(buttonInnerHTML);

    // Call the buttonAnimation function with the button's inner HTML
    buttonAnimation(buttonInnerHTML);
  });
}

// Add a keypress event listener to the whole document
document.addEventListener("keypress", function(event) {
  // Call the makeSound function with the pressed key
  makeSound(event.key);

  // Call the buttonAnimation function with the pressed key
  buttonAnimation(event.key);
});

// Function to play the corresponding sound based on the key
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/snare.mp3').play();
      break;
    case "k":
      new Audio('sounds/crash.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      console.log(key);
  }
}

// Function to add and remove the "pressed" class for button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  // Add the "pressed" class to the active button
  activeButton.classList.add("pressed");

  // Remove the "pressed" class after 100 milliseconds
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
