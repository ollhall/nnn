export function isShowMore () {

  const showMorePart = document.querySelector(".show-more-partners");
  const partsGridItems = document.querySelectorAll(".slider-partners-item");

  if (showMorePart && partsGridItems.length > 0) {
    let itemsPart = 3;
    const productsLengthPart = partsGridItems.length;

    showMorePart.addEventListener("click", () => {
      showMorePart.innerHTML = "Завантажуємо"; // Изменение текста кнопки

      // Задержка на 1 секунду (или любую другую необходимую задержку)
      setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 479.98) {
          itemsPart += 1;
        } else {
          itemsPart += 3;
        }

        const arrayPart = Array.from(document.querySelector(".slider-partners").children);
        const visItemsPart = arrayPart.slice(0, itemsPart);

        visItemsPart.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });

        if (visItemsPart.length > 0) {
          visItemsPart[visItemsPart.length - 1].focus(); // Установка фокуса на последний видимый элемент
        }

        if (visItemsPart.length === productsLengthPart) {
          showMorePart.style.display = "none";
        }

        showMorePart.innerHTML = "показати більше"; // Восстановление исходной метки кнопки после загрузки
      }, 1000); // Задержка в 1 секунду (1000 миллисекунд)
    });
  }

//=========================================

  const showMoreInit = document.querySelector(".show-more-initiatives");
  const initsGridItems = document.querySelectorAll(".slider-initiatives-item");

  if (showMoreInit && initsGridItems.length > 0) {
    let itemsInit = 2;
    const productsLengthInit = initsGridItems.length;

    showMoreInit.addEventListener("click", () => {
      showMoreInit.innerHTML = "Завантажуємо"; // Изменение текста кнопки

      // Задержка на 1 секунду (или любую другую необходимую задержку)
      setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 767.98) {
          itemsInit += 1;
        } else {
          itemsInit += 3;
        }

        const arrayInit = Array.from(document.querySelector(".slider-initiatives").children);
        const visItemsInit = arrayInit.slice(0, itemsInit);

        visItemsInit.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });

        if (visItemsInit.length > 0) {
          visItemsInit[visItemsInit.length - 1].focus(); // Установка фокуса на последний видимый элемент
        }

        if (visItemsInit.length === productsLengthInit) {
          showMoreInit.style.display = "none";
        }

        showMoreInit.innerHTML = "показати більше"; // Восстановление исходной метки кнопки после загрузки
      }, 1000); // Задержка в 1 секунду (1000 миллисекунд)
    });
  }

}
