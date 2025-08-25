// History stack to handle back navigation
let pageHistory = [];

// Get all page divs (any div with an id)
const allPages = Array.from(document.querySelectorAll('div[id]'));

// Show a page and hide all others
function showPage(pageId) {
  allPages.forEach(p => p.classList.add('hidden'));
  const target = document.getElementById(pageId);
  if (target) target.classList.remove('hidden');

  // Add to history if not the same as last entry
  if (pageHistory.length === 0 || pageHistory[pageHistory.length - 1] !== pageId) {
    pageHistory.push(pageId);
  }
}

// Go back to previous page
function goBack() {
  if (pageHistory.length > 1) {
    // Remove current page
    pageHistory.pop();
    const previousPage = pageHistory[pageHistory.length - 1];
    showPage(previousPage);
  }
}

// Go home
function goHome() {
  pageHistory = [];
  showPage('home');
}

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('bw');
  themeBtn.style.color = document.body.classList.contains('bw') ? '#ff69b4' : '#000';
});

// Optional: Flying hearts effect
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.width = heart.style.height = 10 + Math.random() * 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);

// Initialize home page
goHome();
