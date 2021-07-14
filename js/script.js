const popupShow = document.querySelector(".hotel-search__show-button");
const popup = document.querySelector(".hotel-search__pop-up");
const form = popup.querySelector("form")

const buttonSearch = form.querySelector(".pop-up__button");
const dateStart = form.querySelector("[id=date-start]");
const dateEnd = form.querySelector("[id=date-end]");
const countAdult = form.querySelector("[id=count-adults]");
const countChild = form.querySelector("[id=count-childrens]");

popup.classList.add("popup-show");

popupShow.onclick = function () {
  popup.classList.toggle("popup-show");

  dateStart.focus({
    preventScroll: true
  });
};

form.addEventListener("submit", function (evt) {
  if (!dateStart.value || !dateEnd.value || !countAdult.value || !countChild.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});
