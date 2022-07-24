"use strict";

const form = document.querySelector(".form");
const email = document.querySelector(".email-inp");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  submitBtn.classList.toggle("active");
});

function checkEmail() {
  const emailValue = email.value.trim();

  console.log(emailValue);
  if (emailValue === "") {
    errorMsg.textContent = "Email cannot be blank";
    setError(errorMsg, errorIcon, email);
  } else if (!isEmail(emailValue)) {
    errorMsg.textContent = "Please provide a valid email";
    setError(errorMsg, errorIcon, email);
  } else {
    errorMsg.classList.remove("active");
    errorIcon.classList.remove("active");
    email.style.border = "2px solid hsl(0, 22%, 68%)";
  }
}

function setError(msg, icon, inputName) {
  msg.classList.add("active");
  icon.classList.add("active");
  inputName.style.border = "2px solid red";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
