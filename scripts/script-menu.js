document.addEventListener('DOMContentLoaded', function () {
  const sideMenu = document.getElementById('side-menu');
  const toggleButton = document.getElementById('toggle-menu');
  const logout = document.getElementById("log-men-edi");
  const menuHeader = document.getElementById("menu-header");

  toggleButton.addEventListener('click', function () {
    sideMenu.classList.toggle('menu-closed');

    const isOpen = sideMenu.classList.contains('menu-closed');
    if (isOpen) {
      toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
      logout.innerHTML = ' ';
      menuHeader.innerHTML = ' ';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-times"></i>';
      logout.innerHTML = 'Logout';
      menuHeader.innerHTML = '<h2>Menu Welcome</h2>';
    }
  });
});
