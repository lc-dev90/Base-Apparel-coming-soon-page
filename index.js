const submitElement = document.getElementById("input-submit");
const inputEmailElement = document.getElementById("input-text");
const formControl = document.getElementById("form-control");

submitElement.addEventListener("click", (e) => {
  const email = inputEmailElement.value;
  if (email === "") {
    geraErro(email, "Please provide your email");
  } else if (!isValidEmail(email)) {
    geraErro(email, "Please enter a valid email");
  } else {
    document.body.innerHTML = "Helloo";
  }
});

function geraErro(input, msg) {
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
  inputEmailElement.value = "";
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
