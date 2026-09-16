function validateForm() {
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("name-error");

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");

  nameError.textContent = "";
  emailError.textContent = "";

  document.getElementById("name").style.borderColor = "#ddd";
  document.getElementById("email").style.borderColor = "#ddd";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    document.getElementById("name").style.borderColor = "red";
    nameError.textContent = "Molimo Vas da pravilno unesete svoje ime";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("email").style.borderColor = "red";
    emailError.textContent = "Molimo Vas da unesete važeću email adresu";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "thank_you.html";
    return false;
  }

  return isValid;
}