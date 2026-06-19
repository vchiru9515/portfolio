document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks for your message! I'll get back to you soon.";
  this.reset();
});