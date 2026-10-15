// Light/dark toggle. The saved choice is applied early by an inline script in <head>.
const root = document.documentElement;
document.getElementById('toggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Highlight the nav link for the section in view.
const links = document.querySelectorAll('nav a[href^="#"]');
if (links.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
}
