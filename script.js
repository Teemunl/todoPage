// JavaScript code for the button and the post it notes
// Get the button element
var button = document.getElementById("button");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Create a new post it note element
  var postIt = document.createElement("div");
  postIt.className = "post-it";

  // Create a new textarea element for the note content
  var textarea = document.createElement("textarea");
  textarea.placeholder = "Write something...";

  // Create a new delete button element for the note
  var deleteButton = document.createElement("span");
  deleteButton.className = "delete";
  deleteButton.textContent = "X";

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", function() {
    // Remove the post it note from the document
    postIt.remove();
  });

  // Append the textarea and the delete button to the post it note
  postIt.appendChild(textarea);
  postIt.appendChild(deleteButton);

  // Append the post it note to the body
  document.body.appendChild(postIt);

  // Randomize the position and rotation of the post it note
  var x = Math.random() * (window.innerWidth - 200);
  var y = Math.random() * (window.innerHeight - 200);
  var r = Math.random() * 10 - 5;

  postIt.style.left = x + "px";
  postIt.style.top = y + "px";
  postIt.style.transform = "rotate(" + r + "deg)";
});
