var btn = document.getElementById("loginBtn");
var usernameBox = document.getElementById("username");

btn.addEventListener("click", function() {
  if ( username.value !== "" ) {
    console.log( username.value )
  } else {
    // console.error("You need to enter a value.");
    alert("You need to enter a value.");
  }
});
