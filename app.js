// Hide Undo button on load
document.getElementById("undo-seed-btn").style.display = "none";

// Handle Undo button click
document.getElementById("undo-seed-btn").addEventListener("click", function () {
  if (!plan || !plan.completedVerses || plan.completedVerses.length === 0) return;

  // Remove the last completed verse
  const removedVerse = plan.completedVerses.pop();

  // Hide the button again after undo
  document.getElementById("undo-seed-btn").style.display = "none";

  // Save plan and update display
  savePlan(plan);
  updateVerseHighlights();
  updateProgressDisplay();
});

// Mark current verse complete
function markVerseComplete(verse) {
  if (!plan.completedVerses.includes(verse)) {
    plan.completedVerses.push(verse);
    savePlan(plan);
    updateVerseHighlights();
    updateProgressDisplay();

    // Show Undo button
    document.getElementById("undo-seed-btn").style.display = "inline-block";
  }
}