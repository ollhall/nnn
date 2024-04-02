export function isSearch () {
  window.onload = function () {
    document.addEventListener('click', documentActions)

    // Action (делегирование события click)
    function documentActions (e) {
      const targetElement = e.target

      // Для search добавление класса
      if (targetElement.classList.contains('search-form__icon')) {
        document.querySelector('.search-form').classList.toggle('_active')
      } else if (
        !targetElement.closest('.search-form') &&
        document.querySelector('.search-form._active')
      ) {
        document.querySelector('.search-form').classList.remove('_active')
      }
    }
  }
}
