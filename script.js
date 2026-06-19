document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks for your message! I'll get back to you soon.";
  this.reset();
});
// <!-- Skill bar animation -->
const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    const fill = skill.querySelector(".skill-fill");

    skill.addEventListener("mouseenter", () => {
        fill.style.width = fill.dataset.width + "%";
    });

    skill.addEventListener("mouseleave", () => {
        fill.style.width = "0%";
    });

});