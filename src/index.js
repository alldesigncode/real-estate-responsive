window.addEventListener("load", () => {
  const btnSelect = document.querySelectorAll(".btn--select");
  btnSelect.forEach((btn) => btn.addEventListener("click", () => toggle(btn)));

  const toggle = (currentTarget) => {
    btnSelect.forEach((btn) => {
      btn.dataset.active = currentTarget === btn;
    });
  };
});
