document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle-mobile'); 
  const dropdownMenu = document.querySelector('.hamburger-dropdown'); 

  toggleButton.addEventListener('click', function (event) {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle('show'); 
  });

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && event.target !== toggleButton) {
      dropdownMenu.classList.remove('show');
      const submenus = dropdownMenu.querySelectorAll('.dropdown-mobile-menu.show');
      submenus.forEach(submenu => submenu.classList.remove('show'));
    }
  });

  dropdownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  const productToggle = dropdownMenu.querySelector('.dropdown-mobile > a');
  const productSubmenu = dropdownMenu.querySelector('.dropdown-mobile-menu');

  if (productToggle && productSubmenu) {
    productToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      productSubmenu.classList.toggle('show');
    });
  }
});
