export function isVideoButton() {
  // (function () {
  //   let videoContainer = document.getElementById("video");
  //   let videoControls = document.querySelector(".video-control");
  //   if (!videoContainer || !videoControls) {
  //     return;
  //   }
  //   let video = document.getElementById("myVideo");

  //   videoControls.addEventListener("click", function () {
  //     if (video.paused) {
  //       video.play();
  //       videoContainer.classList.add("video-is-playing");
  //     } else {
  //       video.pause();
  //       videoContainer.classList.remove("video-is-playing");
  //       // возвращаем постер
  //       video.load();
  //     }
  //   });

  //   video.addEventListener("ended", function () {
  //     // code to track end of video playback goes here
  //     video.load();
  //     videoContainer.classList.remove("video-is-playing");
  //   });
  // })();

  //==========================================

  // let modal = document.getElementsByClassName("modal");
  // let btns = document.getElementsByClassName("openModalBtn");
  // let spans = document.getElementsByClassName("close");

  // // Проверяем, что на странице есть видеоплееры, и только тогда добавляем обработчики событий
  // if (btns.length > 0 && modal.length > 0) {
  //   // Добавляем обработчики событий для каждой кнопки
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       let videoId = this.getAttribute("data-video");
  //       let modalId = videoId + "_modal";
  //       let currentModal = document.getElementById(modalId);
  //       let videos = currentModal.querySelectorAll(".video__item");
  //       currentModal.style.display = "block";
  //       currentModal.setAttribute("aria-modal", "true");
  //       currentModal.setAttribute("aria-hidden", "false");
  //       currentModal.querySelector(".modal__content").focus();
  //       videos.forEach(function (video) {
  //         video.play();
  //       });
  //     });
  //   }

  //   // Добавляем обработчики событий для каждого "x" и модального окна
  //   for (let i = 0; i < modal.length; i++) {
  //     spans[i].addEventListener("click", function () {
  //       let currentModal = this.closest(".modal");
  //       let videos = currentModal.querySelectorAll(".video__item");
  //       currentModal.style.display = "none";
  //       currentModal.setAttribute("aria-modal", "false");
  //       currentModal.setAttribute("aria-hidden", "true");
  //       this.focus();
  //       videos.forEach(function (video) {
  //         video.pause();
  //         video.currentTime = 0;
  //       });
  //     });

  //     modal[i].addEventListener("click", function (event) {
  //       if (event.target === this) {
  //         let videos = this.querySelectorAll(".video__item");
  //         this.style.display = "none";
  //         this.setAttribute("aria-modal", "false");
  //         this.setAttribute("aria-hidden", "true");
  //         videos.forEach(function (video) {
  //           video.pause();
  //           video.currentTime = 0;
  //         });
  //       }
  //     });

  //     modal[i].addEventListener("keydown", function (event) {
  //       if (event.key === "Escape") {
  //         let videos = this.querySelectorAll(".video__item");
  //         this.style.display = "none";
  //         this.setAttribute("aria-modal", "false");
  //         this.setAttribute("aria-hidden", "true");
  //         videos.forEach(function (video) {
  //           video.pause();
  //           video.currentTime = 0;
  //         });
  //       }
  //     });
  //   }
  // }

  //======================================================================
  // Получаем ссылки на все блоки плееров
  const playerBlocks = document.querySelectorAll(".player");
  let currentAudioPlayer = null;

  // Проходимся по каждому блоку плеера
  playerBlocks.forEach((playerBlock) => {
    // Получаем ссылки на элементы внутри текущего блока плеера
    const playButton = playerBlock.querySelector(".play-btn");
    const audioPlayer = playerBlock.querySelector("audio");
    const audioPlayerContainer = playerBlock.querySelector(
      "#audio-player-container"
    );
    const closeButton = playerBlock.querySelector("#close-player");
    const playButtonImg = playerBlock.querySelector("#playBtnImg");
    const timeDisplay = playerBlock.querySelector("span");
    const progressBar = playerBlock.querySelector(".progress"); // Получаем ссылку на элемент прогрессбара
    const speedControl = playerBlock.querySelector("#speed-control"); // Получаем ссылку на элемент управления скоростью

    // Добавляем обработчик события для нажатия на кнопку воспроизведения
    playButton.addEventListener("click", () => {
      // Закрываем предыдущий плеер, если он есть
      if (currentAudioPlayer && currentAudioPlayer !== audioPlayer) {
        const currentAudioPlayerContainer = currentAudioPlayer.parentNode;
        currentAudioPlayer.pause();
        currentAudioPlayerContainer.style.display = "none";
      }

      // Получаем фактическое значение свойства display для аудиоплеера
      const audioPlayerContainerStyle = getComputedStyle(audioPlayerContainer);

      // Проверяем видимость аудиоплеера
      if (audioPlayerContainerStyle.display === "none") {
        // Если аудиоплеер скрыт, показываем его
        audioPlayerContainer.style.display = "block";
        // Запускаем воспроизведение
        audioPlayer.play();
        // Изменяем изображение и альтернативный текст кнопки воспроизведения
        playButtonImg.src = "img/podcasts/pause.svg";
        playButtonImg.alt = "Пауза";
        // Устанавливаем текущий плеер
        currentAudioPlayer = audioPlayer;
      } else {
        // Проверяем состояние воспроизведения аудио
        if (audioPlayer.paused) {
          // Если аудио на паузе, воспроизводим его
          audioPlayer.play();
          // Изменяем изображение и альтернативный текст кнопки воспроизведения
          playButtonImg.src = "img/podcasts/pause.svg";
          playButtonImg.alt = "Пауза";
          // Устанавливаем текущий плеер
          currentAudioPlayer = audioPlayer;
        } else {
          // Если аудио воспроизводится, ставим его на паузу
          audioPlayer.pause();
          // Изменяем изображение и альтернативный текст кнопки воспроизведения
          playButtonImg.src = "img/podcasts/play.svg";
          playButtonImg.alt = "Відтворення";
          // Сбрасываем текущий плеер
          currentAudioPlayer = null;
        }
      }
    });

    // Добавляем обработчик события для нажатия на кнопку закрытия
    closeButton.addEventListener("click", () => {
      // Скрываем плеер
      audioPlayerContainer.style.display = "none";
      // Ставим плеер на паузу
      audioPlayer.pause();
      // Изменяем изображение и альтернативный текст кнопки воспроизведения
      playButtonImg.src = "img/podcasts/play.svg";
      playButtonImg.alt = "Відтворення";
      // Сбрасываем текущий плеер
      currentAudioPlayer = null;
    });

    // Обновляем время воспроизведения и прогрессбар при изменении состояния аудиоплеера
    audioPlayer.addEventListener("timeupdate", () => {
      const currentTime = Math.floor(audioPlayer.currentTime);
      const duration = Math.floor(audioPlayer.duration); // Получаем длительность аудио
      const progress = (currentTime / duration) * 100; // Вычисляем прогресс в процентах
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      timeDisplay.textContent = timeString;
      progressBar.style.width = `${progress}%`; // Устанавливаем ширину прогрессбара в процентах
    });

    // Добавляем обработчик события для изменения скорости воспроизведения
    speedControl.addEventListener("change", () => {
      audioPlayer.playbackRate = speedControl.value;
    });
  });

  //====================================




  




















}
