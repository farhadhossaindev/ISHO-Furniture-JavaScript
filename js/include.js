document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[include-html]").forEach(el => {
    const file = el.getAttribute("include-html");
    if (file) {
      fetch(file)
        .then(res => res.text())
        .then(data => el.innerHTML = data)
        .catch(err => el.innerHTML = "Component not found.");
    }
  });
});

