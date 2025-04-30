
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const burger = document.getElementById('burger');
    nav.classList.toggle('show');
    burger.classList.toggle('toggle');
  }

  function changeBG() {
    document.body.classList.toggle('light-mode');
  }
  function changeBG(button) {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    button.textContent = "LIGHT";
  } else {
    button.textContent = "DARK";
  }
}
function linkERROR() {
  alert("not publish at GITHUB");
}
function nonelink() {
  alert("none link")
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = new FormData(this);

  fetch("backend/server.php", {
    method: "POST",
    body: form
  })
  .then(response => response.text())
  .then(data => {
    if (data.trim() === "success") {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Something went wrong.");
    }
  });
});