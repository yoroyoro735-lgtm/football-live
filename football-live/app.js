const API_KEY = "youapikey";

fetch("https://api.football-data.org/v4/matches", {
  headers: {
    "X-Auth-Token": API_KEY
  }
})
.then(res => res.json())
.then(data => {
  let container = document.getElementById("matchContainer");
  container.innerHTML = "";

  data.matches.slice(0, 10).forEach(match => {
    let div = document.createElement("div");
    div.classList.add("match");

    div.innerHTML = `
      <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
      <p>Status: ${match.status}</p>
    `;

    container.appendChild(div);
  });
})
.catch(err => {
  console.log(err);
});
