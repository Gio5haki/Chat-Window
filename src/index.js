function addMessage(message, me = true) {
  const template = `<div class="message">
    <div class="${
      me ? "myMessage" : "fromThem"
    }" data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}

typing();
addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Get the form element from the document
const formCollection = document.getElementsByTagName("form");
const form = formCollection[0];

// Get the value of the input text
const inputText = document.getElementById("text-input").value;

// Create a function to add messages to the screen
let handleSubmit = function(event) {
  event.preventDefault();
  addMessage(inputText, true);
  inputText = "";
};

// Listen to submit event listener
form.addEventListener("submit", handleSubmit);

/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Create variable for local time
const localTime = new Date().toLocaleDateString();

// Create function to handle alerting the local time
const handleMessagesClick = function (event) {
  alert(time);
};

// Get the messages and assign them to the variable the value of which is going to be an array
let messages = document.getElementsByClassName("messages");

// Use for of loop to iterate through all the messages and bind click event listener to each of them
for (var message of messages) {
  message.addEventListener("click", handleMessagesClick);
}

/**
 * Listen to every keypress (from the keyboard) in the input and call
 * the function typing()
 */

 // Create a function to handle keydown event  

const handleKeyPress = function (event) {
  typing();
};

// Listen to keydown event listener
inputText.addEventListener("keydown", handleKeyPress);
