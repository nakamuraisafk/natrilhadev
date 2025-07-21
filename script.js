const logo = document.querySelector('.logo');
const titulo = document.getElementById('titulo');

logo.addEventListener('mouseenter', () => {
  logo.style.transform = 'rotate(360deg)';
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'rotate(0deg)';
});

titulo.addEventListener('mouseenter', () => {
  titulo.classList.add('tremor');
});

titulo.addEventListener('mouseleave', () => {
  titulo.classList.remove('tremor');
});
