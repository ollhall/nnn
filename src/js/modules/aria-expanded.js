export function isAriaExpanded() {
  const mainMenu = document.querySelector('nav[aria-label="Главное меню"]');
  const menuItems = mainMenu.querySelectorAll('a[aria-haspopup="true"]');

  // Обработчик события клика на ссылке верхнего уровня
  function handleClick(event) {
    event.preventDefault();
    const menuItem = event.currentTarget;
    const isExpanded = menuItem.getAttribute("aria-expanded") === "true";
    menuItem.setAttribute("aria-expanded", !isExpanded);
  }

  // Обработчик события клика вне меню
  function handleOutsideClick(event) {
    if (!mainMenu.contains(event.target)) {
      menuItems.forEach((item) => {
        item.setAttribute("aria-expanded", "false");
      });
    }
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  document.addEventListener("click", handleOutsideClick);

  //Burger

  const menuButton = document.querySelector(".icon-menu");
  const menuList = document.querySelector(".menu__body");

  menuButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menuList.setAttribute("aria-hidden", expanded);
  });

  // const navToggle = document.getElementById("nav-toggle");
  // const nav = document.querySelector(".panel__nav");

  // if (nav) {
  //   navToggle.addEventListener("change", function () {
  //     if (this.checked) {
  //       nav.setAttribute("aria-expanded", "true");
  //       navToggle.setAttribute("aria-expanded", "true");
  //     } else {
  //       nav.setAttribute("aria-expanded", "false");
  //       navToggle.setAttribute("aria-expanded", "false");
  //     }
  //   });

  //   const navLabel = document.querySelector(".nav-toggle");
  //   navLabel.setAttribute("aria-controls", "nav-toggle");
  //   navLabel.setAttribute("aria-expanded", "false");
  // }




//=====Боковое меню==================
// Получаем ссылки на элементы
const navToggle = document.querySelector('.nav-toggle');
const sidePanel = document.querySelector('.slide-side-panel');
const wrapper = document.querySelector('.slide-side-panel__wrapper');
const body = document.querySelector('body');

// Функция, которая открывает или закрывает меню
function toggleMenu() {
  sidePanel.classList.toggle('open');
  body.classList.toggle('menu-open');
  navToggle.classList.toggle('change-img');

  const expanded = sidePanel.classList.contains('open');
  navToggle.setAttribute('aria-expanded', expanded.toString());

  if (expanded) {
    wrapper.removeAttribute('hidden');
  } else {
    setTimeout(() => {
      wrapper.setAttribute('hidden', '');
    }, 500);
  }

  sidePanel.setAttribute('aria-hidden', (!expanded).toString());
}

// Назначаем обработчик клика на кнопку
navToggle.addEventListener('click', toggleMenu);










}

