//connecting app to the database:
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; // initializeApp is a Firebase function

//database reference url:
const appSettings = {
  databaseURL:
    "https://playground-21f8d-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
console.log(app);

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  console.log(inputValue);
});
