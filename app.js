document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("verse-select").addEventListener("change", function () {
  const val = this.value;
  if (val) {
    alert(`You selected: ${val}`);
    // Optionally route or log this action
  }
});