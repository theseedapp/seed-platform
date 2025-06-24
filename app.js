document.getElementById("undo-seed-btn").style.display = "none";

document.getElementById("undo-seed-btn").addEventListener("click", function () {
  if (!plan || !plan.completedVerses || plan.completedVerses.length === 0) return;

  // Remove the last completed verse
  const removedVerse = plan.completedVerses.pop();

  document.getElementById("undo-seed-btn").style.display = "none";

  // Save and update display
  savePlan(plan);
  updateVerseHighlights(); // Ensures visual feedback for removed verse
  updateProgressDisplay();
});

// Assuming "Seed Planted" button logic is handled in a function named markVerseComplete or similar
function markVerseComplete(verse) {
  // Existing logic to mark verse as complete
  plan.completedVerses.push(verse);

  document.getElementById("undo-seed-btn").style.display = "inline-block";

  savePlan(plan);
  updateVerseHighlights();
  updateProgressDisplay();
}