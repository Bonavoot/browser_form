const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.getElementById("country-error");

const zipcode = document.getElementById("zipcode");
const zipcodeError = document.getElementById("zipcode-error");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const confirmPassword = document.getElementById("confirm");
const confirmError = document.getElementById("confirm-error");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(email, emailError);
  }
});

country.addEventListener("input", function (event) {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError(country, countryError);
  }
});

function showError(event, eventError) {
  if (event.validity.valueMissing) {
    eventError.textContent = "You cannot leave this field empty!";
  } else if (event.validity.typeMismatch) {
    eventError.textContent = `Must be a(n) ${event.id}`;
  } else if (event.validity.tooShort) {
    eventError.textContent = `Should be at least ${event.minLength} characters; you entered
        ${event.value.length}.`;
  }
  eventError.className = "error active";
}

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError(email, emailError);
    event.preventDefault();
  } else if (!country.validity.valid) {
    showError(country, countryError);
    event.preventDefault();
  } else if (!zipcode.validity.valid) {
    showError(zipcode, zipcodeError);
    event.preventDefault();
  } else if (!password.validity.valid) {
    showError(password, passwordError);
    event.preventDefault();
  } else if (!confirmPassword.validity.valid) {
    showError(confirmPassword, confirmError);
    event.preventDefault();
  }
});
