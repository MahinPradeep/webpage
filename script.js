
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const empty = document.getElementById("empty");

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const matches = card.textContent.toLowerCase().includes(query);
    card.style.display = matches ? "" : "none";
    if (matches) visible++;
  });

  empty.hidden = visible > 0;
});
