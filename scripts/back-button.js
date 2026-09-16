window.onscroll = function () {
  const backButton = document.getElementById("back-button");
  if (window.scrollY > 100) {
    backButton.style.display = "none";
  } else {
    backButton.style.display = "block";
  }
};