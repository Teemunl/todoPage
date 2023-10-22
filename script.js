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

  // Add event listeners for drag and drop functionality
  postIt.addEventListener("mousedown", startDrag);
  postIt.addEventListener("mousemove", moveDrag);
  postIt.addEventListener("mouseup", stopDrag);
});

// Variables to store the state and the offset of the drag
var dragging = false;
var offsetX = 0;
var offsetY = 0;

// Function to start the drag when the mouse is pressed on a post-it note
function startDrag(e) {
  // Set the dragging flag to true
  dragging = true;

  // Get the current mouse position
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  // Get the current position of the post-it note
  var postItX = parseInt(e.target.style.left);
  var postItY = parseInt(e.target.style.top);

  // Calculate the offset between the mouse and the post-it note
  offsetX = mouseX - postItX;
  offsetY = mouseY - postItY;
}

// Function to move the post-it note when the mouse is moved while dragging
function moveDrag(e) {
  // Check if the dragging flag is true
  if (dragging) {
    // Get the current mouse position
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // Calculate the new position of the post-it note
    var postItX = mouseX - offsetX;
    var postItY = mouseY - offsetY;

    // Set the new position of the post-it note
    e.target.style.left = postItX + "px";
    e.target.style.top = postItY + "px";
  }
}

// Function to stop the drag when the mouse is released
function stopDrag(e) {
  // Set the dragging flag to false
  dragging = false;
}
