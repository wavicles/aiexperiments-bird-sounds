document.addEventListener("DOMContentLoaded", () => {
  const birdName = document.getElementById("birdName");
  const startLink = document.getElementById("startLink");
  const aboutLink = document.getElementById("aboutLink");
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");

  if (startLink) {
    startLink.addEventListener("click", () => {
      intro.style.display = "none";
      birdName.innerHTML = "🕊️ Example Bird: Northern Cardinal";
    });
  }

  if (aboutLink) {
    aboutLink.addEventListener("click", () => {
      intro.style.display = "none";
      about.style.display = "block";
    });
  }
});
