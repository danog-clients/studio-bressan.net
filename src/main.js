// Entry point. Kept intentionally minimal for the placeholder site —
// this is where future interactivity (navigation, forms, etc.) will live.

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
