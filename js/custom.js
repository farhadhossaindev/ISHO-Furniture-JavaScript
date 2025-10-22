
//---------  Artist Filter Functionality  ------------------//
const filterBtns = document.querySelectorAll(".filter-btns .btn");
const artistCards = document.querySelectorAll(".artist-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active button style
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    artistCards.forEach((card) => {
      card.style.display =
        filter === "all" || card.getAttribute("data-category") === filter
          ? "block"
          : "none";
    });
  });
});
