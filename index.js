const submitElement = document.getElementById("input-submit");
const inputEmailElement = document.getElementById("input-text");
const formControl = document.getElementById("form-control");
const modalPopup = document.getElementById("modal-popup");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

submitElement.addEventListener("click", (e) => {
  const email = inputEmailElement.value;
  if (email === "") {
    errorGenerator(email, "Please provide your email");
  } else if (!isValidEmail(email)) {
    errorGenerator(email, "Please enter a valid email");
  } else {
    successGenerator(email, "Thank you for subscribe!");
  }
});

function errorGenerator(input, msg) {
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
  inputEmailElement.value = "";
}

function successGenerator(input, msg) {
  modal.style.display = "block";
  modalPopup.querySelectorAll("p")[0].textContent = `${msg}`;
  modalPopup.querySelectorAll(
    "p"
  )[1].textContent = `An email has been send to ${input}, go ahead and check it out!`;

  inputEmailElement.value = "";
  close.addEventListener("click", (e) => {
    location.reload();
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      location.reload();
      modal.style.display = "none";
    }
  };
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
