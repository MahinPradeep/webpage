
const message = document.getElementById("message");
const messageBtn = document.getElementById("messageBtn");

const countText = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");

let count = 0;

// Change the welcome message
messageBtn.addEventListener("click", function () {
    message.textContent =
        "Great job! You just used JavaScript!";
});

// Increase the counter
addBtn.addEventListener("click", function () {
    count = count + 1;
    countText.textContent = count;
});

// Reset the counter
resetBtn.addEventListener("click", function () {
    count = 0;
    countText.textContent = count;
});

// Switch between light and dark mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Handle the contact form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + "! Your form was submitted.";

    contactForm.reset();
});
