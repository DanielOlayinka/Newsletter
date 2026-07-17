var emailError = document.getElementById("email-error");
var emailInput = document.getElementById("email-field");
const emailDisplay = document.getElementById("email-display");

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function handleSubmit() {
  const email = emailInput.value;
  if(!validateEmail(email)){
    emailError.textContent = "Valid email required";
    emailError.style.color = "var(--Tomato)";
    emailInput.style.backgroundColor = "var(--Light-red)";
    emailInput.style.borderColor = "var(--Tomato)";
    emailInput.style.color = "var(--Tomato)";
  }
  else{
    localStorage.setItem("inputed-email", email);
    window.location.href = "success.html";
  }
};


if (emailDisplay) {
  const final = localStorage.getItem("inputed-email");
  emailDisplay.textContent = `${final}`;
}


document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
});