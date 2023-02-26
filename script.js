window.onload = function () {
  document.getElementById("back-button").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Project/index.html";
  });
};

function toggleContent(elementId) {
  var content = document.getElementById(elementId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// const nextButton = document.querySelector("#next-button");
// const nextList = document.querySelector("ul.hidden");

// nextButton.addEventListener("click", function () {
//   nextList.style.display = "block";
// });

const button = document.getElementById("next-button");
const uls = document.getElementsByTagName("ul");
let currentUl = 0;

button.addEventListener("click", function() {
  uls[currentUl].style.display = "none";
  currentUl = (currentUl + 1) % uls.length;
  uls[currentUl].style.display = "block";
});
