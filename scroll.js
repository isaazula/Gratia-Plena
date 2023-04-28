const home_link = document.getElementById("gratia__link");

home_link.addEventListener("click", homeLink);

function homeLink(event) {
  event.preventDefault();
  const planner = document.getElementById("gratia_planner");
  planner.scrollIntoView({ behavior: "smooth" });
}
