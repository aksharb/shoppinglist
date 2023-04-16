//connecting app to the database:
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; // initializeApp is a Firebase function
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
//database reference url:
const appSettings = {
  databaseURL:
    "https://realtime-database-c9006-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  console.log(inputValue);
});
