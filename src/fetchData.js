const skywalkerContainer = document.getElementById("skywalker");
const getDarthVaderButton = document.getElementById("darthVader");

const darthVaderContainer = document.getElementById("darthVaderDiv");

function getSkywalker() {
  fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
    .then(myjson => {
      skywalkerContainer.innerHTML = JSON.stringify(myjson, null, 2);
    })
    .catch(err => console.log("Error"));
}

function getDarthVader() {
  fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(myjson => {
      darthVaderContainer.innerHTML = JSON.stringify(myjson, null, 2);
    })
    .catch(err => console.log("Error"));
}

getDarthVaderButton.addEventListener("click", () => {
  getDarthVader();
});
getSkywalker();
