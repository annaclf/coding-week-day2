function main() {
  const menuTrigger = document.getElementById('menu_trigger');
  const menu = document.getElementById('menu');

  menuTrigger.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('open');
    menuTrigger.classList.toggle('open');
  }
}

window.addEventListener('load', main);