// Get references to the input box and list container by their IDs.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task when the "Add" button is clicked.
function addTask() {
    // Check if the input box is empty.
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item (<li>) to represent the task.
        let li = document.createElement("li");

        // Set the content of the list item to the value of the input box.
        li.innerHTML = inputBox.value;

        // Append the list item to the list container.
        listContainer.appendChild(li);

        // Create a "close" button (a small 'x') for each task.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' character.

        // Append the close button to the list item.
        li.appendChild(span);
    }

    // Clear the input box after adding a task.
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();