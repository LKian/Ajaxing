console.log("AJAX-ing");
let pageCounter = 1;
const button = document.querySelector(".button--ajax");
const animalContainer = document.querySelector(".animalContainer");

button.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`
  );
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    button.classList.add("hidden");
  }
});

function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += `
    <p>
    <span class="page-number">Page: ${pageCounter - 1}</span> ${
      data[i].name
    } is a ${data[i].species == "cat" ? "🐱" : "🐶"}.  It loves ${
      data[i].foods.likes
    } and hates ${data[i].foods.dislikes}.</p> `;
  }
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
