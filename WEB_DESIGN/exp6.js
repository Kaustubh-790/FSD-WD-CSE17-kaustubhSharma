function validateForm() {
  let name = document.getElementById("fname").value.trim();
  let password = document.getElementById("password").value.trim();

  let namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(name)) {
    alert("Name should contain only alphabets.");
    return false;
  }

  if (name.length < 6) {
    alert("Name should not be less than 6 characters.");
    return false;
  }

  if (password.length < 6) {
    alert("Password should not be less than 6 characters.");
    return false;
  }

  return true;
}
