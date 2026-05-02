document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = String(new Date().getFullYear());
}
