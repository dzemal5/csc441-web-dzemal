// Class 15: Step 1: this file is running
console.log("script.js is running")

// Class 15: Step 2: put this year in the footer
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();

}
// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    // Lab 15 · Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }
    
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
}