// Show / hide pages
function showPage(pageId) {
  const pages = document.querySelectorAll('#home, #assigning, #assigning-ps, #assigning-ps-old, #assigning-ps-new, #assigning-ds, #slas, #irt, #irt-ps, #irt-ps-vh, #irt-ps-other, #irt-ds, #ort, #apt');
  pages.forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('bw');
});

// Flying hearts
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
