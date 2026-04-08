/* DogTrainingHQ — app.js */
(function(){
  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function(q){
    q.addEventListener("click", function(){
      q.closest(".faq-item").classList.toggle("open");
    });
  });

  // TOC toggle
  window.tocToggle = function(btn) {
    var list = btn.parentElement.querySelector(".toc-list");
    var label = btn.querySelector(".toc-toggle-label");
    if (!list) return;
    var open = list.style.display !== "none";
    list.style.display = open ? "none" : "block";
    if (label) label.textContent = open ? "Show \u2193" : "Hide \u2191";
  };
})();
