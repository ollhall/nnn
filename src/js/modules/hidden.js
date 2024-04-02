
export function isHidden() {

    const btn = document.querySelector(".btn-hidden");
    const content = document.querySelector(".content");

    btn.addEventListener("click", btnClick);

    function btnClick() {
        console.log(content.classList);

        if (content.classList.contains("hidden")) {
            btn.textContent = "Скрыть ответ";
        } else {
            btn.textContent = "Посмотреть ответ";
        }

        content.classList.toggle("hidden");
    }
}