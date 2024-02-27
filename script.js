const menu_btn = document.querySelector('.my-btn');
const side_btn = document.querySelector('.side-nav-bar');
const btn = document.querySelector('.ri-close-fill');

menu_btn.addEventListener('click', () => {
    side_btn.style.display = 'block';
    menu_btn.style.display = 'block';
})

btn.addEventListener('mouseup', () => {
    side_btn.style.display = 'none';
    menu_btn.style.display = 'block';
})


function toggleSidebar() {
    var screenWidth = window.innerWidth;
    var breakpoint = 768;

    if (screenWidth > breakpoint) {
      side_btn.style.display = 'block';
    } else {
        side_btn.style.display = 'none';
    }
  }
  toggleSidebar();
  window.addEventListener('resize', toggleSidebar);
  