
// Select the button element
const addPostit = document.getElementById("add-postit");

// Select the postit-container element
const postitContainer = document.getElementById("postit-container");

// Define a function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add an event listener for the click event on the button element
addPostit.addEventListener("click", function() {
  // Generate a random color
  const color = getRandomColor();

  // Create a new div element and assign it the random color as its background color
  const postit = document.createElement("div");
  postit.style.backgroundColor = color;

  // Create a new textarea element and append it to the div element
  const textarea = document.createElement("textarea");
  postit.appendChild(textarea);

  // Append the div element to the postit-container element
  postitContainer.appendChild(postit);

  // Assign a random rotation angle to the div element using a CSS custom property
  postit.style.setProperty("--random-angle", Math.random());

  // Add a class name to the div element for styling purposes
  postit.classList.add("postit");

  // Make the div element draggable and resizable using interact.js library
  interact(postit)
    .draggable({
      // Restrict the drag movement to the postit-container element
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
      // Update the position of the div element on dragmove event
      onmove: function (event) {
        var target = event.target;
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
        target.style.transform =
          "translate(" + x + "px, " + y + "px) rotate(calc(-10deg + (20deg * var(--random-angle))))";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    })
    .resizable({
      // Restrict the resize edges to the right and bottom
      edges: { left: false, right: true, bottom: true, top: false },
      // Restrict the resize movement to the postit-container element
      modifiers: [
        interact.modifiers.restrictEdges({
          outer: "parent",
          endOnly: true,
        }),
      ],
      // Update the width and height of the div element on resizemove event
      onmove: function (event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";
        x += event.deltaRect.left;
        y += event.deltaRect.top;
        target.style.transform =
          "translate(" + x + "px, " + y + "px) rotate(calc(-10deg + (20deg * var(--random-angle))))";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    });
});
