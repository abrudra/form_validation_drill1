let nameId = document.getElementById("name");
let emailId = document.getElementById("email");
let whaloveId = document.getElementById("whalove");
let colorId = document.getElementById("color");
let rangeId = document.getElementById("range");
let radioId = document.getElementById("radio");
let checkboxId = document.getElementById("checkbox");
let formId = document.getElementById("form");
let errorMessage = document.getElementById("error");

let resultDiv = getElementById("resultdiv");



formId.addEventListener("submit", (e) => {
  let message = [];
  if (nameId.value === "" || nameId.value == null) {
    message.push("*Name is required..!");
    // return
  }
  if (nameId.value.length < 4) {
    message.push("*Name minimum 4 character rquired..!");
    // return true
  }
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailId.value.match(validRegex)) {
    message.push("email is not coorwxt");
    // return true
  }

  if (!checkboxId.checked) {
    message.push("*Please check the terms.!");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorMessage.innerText = message.join(", ");
  }
  formId.style.display = "none";
});
