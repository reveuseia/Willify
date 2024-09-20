// let loginBtn = document.getElementById("loginBtn")
// loginBtn.addEventListener('click', ()=>{
//   // window.location.href="login.html";
// });


// let RegistBtn = document.getElementById("RegistBtn")
// RegistBtn.addEventListener('click', ()=> {
//     window.location.href="home.html"
// });


let RegistBtn = document.getElementById("RegistForm")
RegistBtn.addEventListener("submit", function(e){
  e.preventDefault()

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const ageError = document.getElementById("ageError");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const age = document.getElementById("age");

  if(name.value.trim() === ""){
    nameError.textContent = "Name cannot be empty";
    return;
  } else{
    nameError.textContent = "";
  }

  if(!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)){
    emailError.textContent = "Invalid email address";
    return;
  } else{
    emailError.textContent = "";
  }

  if(password.value.trim() === ""){
    passwordError.textContent = "Password cannot be empty";
  } else if (password.value.trim().length < 8){
    passwordError.textContent = "Password must be at least 8 characters!";
    return;
  } else{
    passwordError.textContent = "";
  }

  if(isNaN(age.value) || age.value < 12){
    ageError.textContent = "Not old enough. Minimum 12 years old";
    return;
  } else{
    ageError.textContent = "";
  }

  const female = document.getElementById("female");
  const male = document.getElementById("male");

  let genderSelected = false;

  if(!female.checked && !male.checked){
    alert("Please select your gender.");
    return;
  } else{
    genderSelected = true;
  }

  alert("Registration Success!");
  window.location.href = "home.html"
});




























