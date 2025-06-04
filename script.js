<script>
  const toggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  toggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
</script>
