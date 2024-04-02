export function isParallaxMouse () {
  /*
    Предмету, который будет двигаться за мышью указать атрибут data-prlx-mouse.

    // =============
    Если нужно дополнительные насторойки - указать

    Атрибут                            Значение по умолчанию
    -----------------------------------------------------------------------------------------------------------
    data-prlx-cx="коэффициент_x"               100               значение больше - меньше процент сдвига
    data-prlx-cy="коэффициент_y"               100               значение больше - меньше процент сдвига
    data-prlx-dxr                                                против оси Х
    data-prlx-dyr                                                против оси Y
    data-prlx-a="скорость_анимации"            50                больше значение - больше скорость

    // ==============
    Если нужно считывать движение мыши в блоке-родителе - тому родителю указать атрибут data-prlx-mouse

    Если в параллаксе картинка - растянуть ее на >100%.
    Например:
    width: 130%;
    height: 130%;
    top: -15%;
    left: -15%;
    */
  // class MousePRLX {
  //     constructor(props, data = null) {
  //         let defaultConfig = {
  //         init: true,
  //         logging: true,
  //         }
  //       this.config = Object.assign(defaultConfig, props);
  //       if (this.config.init) {
  //         const paralaxMouse = document.querySelectorAll('[data-prlx-mouse]');
  //         if (paralaxMouse.length) {
  //             this.paralaxMouseInit(paralaxMouse);
  //             this.setLogging(`Проснулся, слежу за объектами: (${paralaxMouse.length})`);
  //         } else {
  //             this.setLogging('Нет ни одного объекта. Сплю...zzzZZZzZZz...');
  //         }
  //       }
  //     }
  //     paralaxMouseInit(paralaxMouse) {
  //         paralaxMouse.forEach(el => {
  //             const paralaxMouseWrapper = el.closest('[data-prlx-mouse-wrapper]');

  //             // Коэф. X
  //             const paramCoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
  //              // Коэф. Y
  //              const paramCoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
  //              // Напр. X
  //              const directionX = el.hasAttribute('data-prlx-dxr') ? -1 : 1;
  //               // Напр. Y
  //               const directionY = el.hasAttribute('data-prlx-dyr') ? -1 : 1;
  //               // Скорость анимации
  //               const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;

  //               // Объявление переменных
  //               let positionX = 0, positionY = 0;
  //               let coordXprocent = 0, coordYprocent = 0;

  //               setMouseParallaxStyle();

  //               // Проверяю на наличие родителя, в котором будет считываться положение мыши
  //               if (paralaxMouseWrapper) {
  //                 mouseMoveParalax(paralaxMouseWrapper);
  //               } else {
  //                 mouseMoveParalax();
  //               }

  //           function setMouseParallaxStyle() {
  //             const distX = coordXprocent - positionX;
  //             const distY = coordYprocent - positionY;
  //             positionX = positionX + (distX * paramAnimation / 1000);
  //             positionY = positionY + (distY * paramAnimation / 1000);
  //             el.style.cssText = `transform: translate3D(${directionX * positionX / (paramCoefficientX / 10)}%,${directionY * positionY / (paramCoefficientY / 10)}%,0);`;
  //             requestAnimationFrame(setMouseParallaxStyle);
  //           }
  //           function mouseMoveParalax(wrapper = window) {
  //             wrapper.addEventListener("mousemove", function (e) {
  //                 const offsetTop = el.getBoundingClientRect().top + window.scrollY;
  //                 if (offsetTop >= window.scrollY || (offsetTop + el.offsetHeight) >= window.scrollY) {
  //                 // Получение ширины и высоты блока
  //                 const parallaxWidth = window.innerWidth;
  //                 const parallaxHeight = window.innerHeight;
  //                 // Ноль по середине
  //                 const coordX = e.clientX - parallaxWidth / 2;
  //                 const coordY = e.clientY - parallaxHeight / 2;
  //                 // Получаем проценты
  //                 coordXprocent = coordX / parallaxWidth * 100;
  //                 coordYprocent = coordY / parallaxHeight * 100;
  //                 }
  //             });
  //           }
  //         });
  //     }
  //     // Логгинг в консоль
  //     setLogging(message) {
  //         this.config.logging ? FLS(`[PRLX Mouse]: ${message}`) : null;
  //     }

  //      // Запускаем и добавляем в объект модулей
  // //  Modules.mousePrlx = new MousePRLX({});

  // }

  'use strict'

  // Ждем загрузку контента
  window.onload = function () {
    const parallax = document.querySelector('.parallax')

    if (parallax) {
      const content = document.querySelector('.parallax__container')
      const itemOne = document.querySelector('.item__one')
      const itemTwo = document.querySelector('.item__two')
      const itemThree = document.querySelector('.item__three')
      const itemFour = document.querySelector('.item__four')
      const itemFive = document.querySelector('.item__five')
      const itemSix = document.querySelector('.item__six')
      const itemSeven = document.querySelector('.item__seven')
      const imageOne = document.querySelector('.image-block__item')

      // Коэффициенты
      const forItemOne = 1
      const forItemTwo = -1
      const forItemThree = 1
      const foritemFour = -1
      const foritemFive = 1
      const foritemSix = -1
      const foritemSeven = 1
      const forimageOne = -1

      // Скорость анимации
      const speed = 0.05

      // Объявление переменных
      let positionX = 0,
        positionY = 0
      let coordXprocent = 0,
        coordYprocent = 0

      function setMouseParallaxStyle () {
        const distX = coordXprocent - positionX
        const distY = coordYprocent - positionY

        positionX = positionX + distX * speed
        positionY = positionY + distY * speed

        // Передаем стили
        itemOne.style.cssText = `transform: translate(${positionX /
          forItemOne}%,${positionY / forItemOne}%);`
        itemTwo.style.cssText = `transform: translate(${positionX /
          forItemTwo}%,${positionY / forItemTwo}%);`
        itemThree.style.cssText = `transform: translate(${positionX /
          forItemThree}%,${positionY / forItemThree}%);`
        itemFour.style.cssText = `transform: translate(${positionX /
          foritemFour}%,${positionY / foritemFour}%);`
        itemFive.style.cssText = `transform: translate(${positionX /
          foritemFive}%,${positionY / foritemFive}%);`
        itemSix.style.cssText = `transform: translate(${positionX /
          foritemSix}%,${positionY / foritemSix}%);`
        itemSeven.style.cssText = `transform: translate(${positionX /
          foritemSeven}%,${positionY / foritemSeven}%);`

        requestAnimationFrame(setMouseParallaxStyle)
      }
      setMouseParallaxStyle()

      parallax.addEventListener('mousemove', function (e) {
        // Получение ширины и высоты блока
        const parallaxWidth = parallax.offsetWidth
        const parallaxHeight = parallax.offsetHeight
        // Ноль по середине
        const coordX = e.pageX - parallaxWidth / 2
        const coordY = e.pageY - parallaxHeight / 2
        // Получаем проценты
        coordXprocent = (coordX / parallaxWidth) * 100
        coordYprocent = (coordY / parallaxHeight) * 100
      })

      // Parallax при скролле

      let thresholdSets = []
      for (let i = 0; i <= 1.0; i += 0.005) {
        thresholdSets.push(i)
      }
      const callback = function (entries, observer) {
        const scrollTopProcent =
          (window.pageYOffset / parallax.offsetHeight) * 100
        setParallaxItemsStyle(scrollTopProcent)
      }
      const observer = new IntersectionObserver(callback, {
        threshold: thresholdSets
      })

      observer.observe(document.querySelector('.content'))

      function setParallaxItemsStyle (scrollTopProcent) {
        //  content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
        imageOne.style.cssText = `transform: translate(0%,-${scrollTopProcent /
          6}%);`
        //  human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
      }
    }
  }
}
