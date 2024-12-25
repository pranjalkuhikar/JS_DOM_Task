let btn = document.querySelector("button");
let team = document.querySelector(".team");

const randomTeam = () => {
  let teams = ["CSC", "DC", "KKR", "MI", "PK", "RR", "RCB", "SRH"];
  return teams[Math.floor(Math.random() * teams.length)];
};

btn.addEventListener("click", () => {
  team.textContent = randomTeam();
});
