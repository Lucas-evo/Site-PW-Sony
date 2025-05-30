// Seleciona o navbar
const navbar = document.getElementById('navbar');

// Adiciona um listener de scroll na janela
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Adiciona a classe quando rolar
  } else {
    navbar.classList.remove('scrolled'); // Remove a classe ao voltar
  }
});
