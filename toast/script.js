document.querySelector(".my-button").onclick = function () {
  var card = document.getElementById("card1");
  card.style.display = "block";
  // Force reflow to ensure the transition runs
  void card.offsetWidth;
  card.classList.add("show");
};
