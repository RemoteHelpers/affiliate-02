const refs = {
  swiperSlide: document.querySelector(".js-portfolio-swiper"),
  modal: document.querySelector("#modal-backdrop"),
  closeModalBtn: document.querySelector(".close-btn"),
  contactUs: document.querySelector(".phon-column"),
  panelClose: document.querySelector(".panel-close"),
  panelWrap: document.querySelector(".offcanvas-panel"),
  btnCalendly: document.querySelector("#js-calendly-open"),
  modalCalendly: document.querySelector("#modal-calendly"),
  closeCalendlyBtn: document.querySelector("#modal-calendly .close-btn"),
};
// onOpen Panel
refs.contactUs.addEventListener("click", openPanel);
function openPanel(e) {
  e.preventDefault();
  refs.panelWrap.classList.toggle("panel-on");
  refs.panelClose.addEventListener("click", onClosePanel);
  refs.panelWrap.addEventListener("click", onWrapClick);
}
function onClosePanel(e) {
  e.preventDefault();
  refs.panelWrap.classList.remove("panel-on");
}
function onWrapClick(e) {
  if (e.target === e.currentTarget) {
    refs.panelWrap.classList.remove("panel-on");
  }
}

// onOpen Modal
refs.swiperSlide.addEventListener("click", onOpenModal);
function onOpenModal(e) {
  e.preventDefault();
  if (!e.target.closest(".portfolio-item")) return;
  const clickedImg = e.target.closest(".portfolio-item").firstElementChild;
  refs.modal.classList.add("is-visible");
  refs.modal.firstElementChild.insertAdjacentHTML(
    "beforeend",
    `<img src="${clickedImg.dataset.link || clickedImg.src}" alt="${
      clickedImg.alt
    }" style="width: 100%" />`
  );
  refs.closeModalBtn.addEventListener("click", onCloseModalBtnClick);
  refs.modal.addEventListener("click", onModalClick);
}
function onModalClick(e) {
  e.preventDefault();
  if (e.target !== e.currentTarget) return;
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}
function onCloseModalBtnClick(e) {
  e.preventDefault();
  refs.modal.classList.remove("is-visible");
  refs.modal.firstElementChild.innerHTML = "";
}

// onOpenCalendly
refs.btnCalendly.addEventListener("click", onOpenCalendly);
function onOpenCalendly(e) {
  e.preventDefault();
  refs.modalCalendly.classList.add("is-visible");
  refs.closeCalendlyBtn.addEventListener("click", onCalendlyClose);
  refs.modalCalendly.addEventListener("click", onCalendlyBackdropClick);
}
function onCalendlyClose() {
  refs.modalCalendly.classList.remove("is-visible");
}
function onCalendlyBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.modalCalendly.classList.remove("is-visible");
  }
}
