// Show Alert
const showAlert = document.querySelector("[show-alert]");
if(showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("show-alert-hidden");
  }, time);

  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("show-alert-hidden");
  });
}
// End Show Alert