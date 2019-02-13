var form = document.getElementById("signup");
console.log(form);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var mobile = document.getElementById("mobile");
  var fullName = document.getElementById("name");
  var username = document.getElementById("username");
  var password = document.getElementById("pass");

  var errorMobile = document.querySelector("#mobile-error");
  var errorFullName = document.querySelector("#name-error");
  var errorUsername = document.querySelector("#username-error");
  var errorPassword = document.querySelector("#pass-error");

  if (mobile.value === "") {
    mobile.style.borderColor = "red";
    errorMobile.style.display = "block";
  } else {
    mobile.style.borderColor = "transparent";
    errorMobile.style.display = "none";
  }

  if (fullName.value === "") {
    fullName.style.borderColor = "red";
    errorFullName.style.display = "block";
  } else {
    fullName.style.borderColor = "transparent";
    errorFullName.style.display = "none";
  }

  if (username.value === "") {
    username.style.borderColor = "red";
    errorUsername.style.display = "block";
  } else {
    username.style.borderColor = "transparent";
    errorUsername.style.display = "none";
  }

  if (password.value === "") {
    password.style.borderColor = "red";
    errorPassword.style.display = "block";
  } else {
    password.style.borderColor = "transparent";
    errorPassword.style.display = "none";
  }

  console.log({
    mobile: mobile.value,
    name: fullName.value,
    user: username.value,
    pass: password.value
  })
});
