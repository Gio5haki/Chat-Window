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

// Code here
// 1. I need to get the item to listen to
const formCollection = document.getElementsByTagName("form");
const form = formCollection[0];

// 2. I need to bind the submit listener to that item
// 3. I need to add a message everytime this listener is called
// 4. I need to make an input text to the add message
let handleSubmit = function(event) {
  event.preventDefault();
  const inputElement = document.getElementById("form-input");
  const inputValue = inputElement.value;
  addMessage(inputValue, true);
  inputValue = "";
};

form.addEventListener("submit", handleSubmit);


/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Code here

/**
 * Listen to every keypress (from the keyboard) in the input and call
 * the function typing()
 */

// Code here
