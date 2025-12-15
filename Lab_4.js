/* Dark mode */

const modeSwitch = document.getElementById('mode-switch');
let darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
};

// load saved mode
if (darkmode === "active") enableDarkmode();

modeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

/* Change Job Title */

const title = document.getElementById("jobTitle");
const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", () => {
    const newText = prompt("Enter new title:");
    if (newText && newText.trim() !== "") {
        title.textContent = newText.trim();
    }
});

/* Toggle  */

const toggleButton = document.getElementById('toggleButton');
const myList = document.getElementById('myList');

toggleButton.addEventListener('click', () => {
    myList.classList.toggle('hidden');
});

/* Message count */

const messageBox = document.getElementById("messBox");
const charCounter = document.getElementById("charCounter");
const maxChars = Number(messageBox.maxLength);

messageBox.addEventListener("input", () => {
    const remaining = maxChars - messageBox.value.length;
    charCounter.textContent = `${remaining} characters left`;
});

/* Greetings */

window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("greetingPopup");

    const hour = new Date().getHours();
    let greetingMessage =
        hour < 12 ? "Good morning!" :
        hour < 18 ? "Good afternoon!" :
        "Good evening!";

    popup.textContent = greetingMessage;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
});