export function isBurger() {
  // Меню Burger

  const iconMenu = document.querySelector('.icon-menu');
  if (iconMenu) {
  	const menuBody = document.querySelector('.menu');
  	iconMenu.addEventListener("click", function (e) {
  		document.body.classList.toggle('_lock');
  		iconMenu.classList.toggle('menu-open');
  		menuBody.classList.toggle('menu-open');

  	});
  }

  //============Burger aria==========================

  const menuButton = document.querySelector(".icon-menu");
  const menuList = document.querySelector(".menu__body");

  menuButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menuList.setAttribute("aria-hidden", expanded);
  });


}