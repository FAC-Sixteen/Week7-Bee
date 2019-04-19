const loginButton = document.querySelector("#loginModal");
const registerButton = document.querySelector("#registerModal");
const loginModal = document.querySelector(".login__modal--hidden");
const registerModal = document.querySelector(".register__modal--hidden");

loginButton.addEventListener("click", () => {
  registerModal.classList.remove("register__modal--display");
  loginModal.classList.toggle("login__modal--display");
});

registerButton.addEventListener("click", () => {
  loginModal.classList.remove("login__modal--display");
  registerModal.classList.toggle("register__modal--display");
})
