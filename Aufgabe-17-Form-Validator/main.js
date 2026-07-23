const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isRequiredValid = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]);
});

function checkRequired(inputArray) {
  let isValid = true;

  inputArray.forEach((input) => {
    if (input.value.trim === "") {
      showError(input, `${formatFieldName(input)} is required`);
      isValid = false;
    } else {
      schowSuccess(input);
    }
  });
  return isValid;
}

// Format field name with proper capitalization
function formatFieldName(input) {
  // input id: username -> Username
  return input.id.chartAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}
