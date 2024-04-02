export function isSpoller() {
  const spoilerButton = document.querySelector(".spoiler-button");
  const spoilerContent = document.querySelector(".spoiler-content");

  if (spoilerButton && spoilerContent) {
    // Проверка ссылок на null
    spoilerButton.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);
      spoilerContent.setAttribute("aria-hidden", expanded);

      if (expanded) {
        this.textContent = "Детальніше про театр пригноблених";
      } else {
        this.textContent = "Приховати детальну інформацію";
      }
    });
  }


  

}
