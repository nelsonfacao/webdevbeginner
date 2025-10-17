function showMenu() {
  document.getElementById("menu").style.right = "0";
  document.getElementById("menu").style.opacity = "1";
}

function closeMenu() {
  document.getElementById("menu").style.right = "-600px";
  document.getElementById("menu").style.opacity = "0.1";
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  if (window.scrollY > this.window.innerHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}); 