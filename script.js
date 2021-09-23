document.querySelector("#text").onclick = function () {
  document.querySelector("#text").style.opacity = "0.8";
  document.querySelector("#text").style.textTransform = "uppercase";
};
document.getElementById("submit").onclick = function (e) {
  e.preventDefault();
  let country = document.querySelector("#text").value;

  fetch("https://covid-19-tracking.p.rapidapi.com/v1/" + country, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8bea9c0810msh9a5ed5242c26769p1fade1jsnf97d08ff908d",
      "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(
        "#country"
      ).innerHTML = `${response["Country_text"]}`;
      document.querySelector(
        "#activeCases"
      ).innerHTML = ` ${response["Active Cases_text"]}`;
      document.querySelector(
        "#totalCases"
      ).innerHTML = ` ${response["Total Cases_text"]}`;
      document.querySelector(
        "#totalDeaths"
      ).innerHTML = ` ${response["Total Deaths_text"]}`;
      document.querySelector(
        "#totalRecovered"
      ).innerHTML = `${response["Total Recovered_text"]}`;
    })

    .catch((err) => {
      console.error(err);
    });
};
