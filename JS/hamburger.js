document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const dropdown = document.getElementById("hamburger-dropdown");

  hamburgerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.style.display = "block";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  });

  closeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "inline";
  });
});
