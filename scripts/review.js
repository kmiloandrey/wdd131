// Dynamic footer dates
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// LocalStorage Review Counter Logic
// Get the current counter value from localStorage (defaults to 0 if it doesn't exist yet)
let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

// Increment the count by 1 since a new form was just submitted
reviewCount++;

// Store the updated total back into localStorage
window.localStorage.setItem("reviewCount-ls", reviewCount);

// Update the DOM element to show the user their current count
const counterDisplay = document.getElementById("review-counter");
if (counterDisplay) {
    counterDisplay.textContent = reviewCount;
}