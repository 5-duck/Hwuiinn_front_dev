const modal = document.querySelector(".modal");

export const openModal = () => {
  const OpenBtn = document.querySelector(".open_modal");
  console.log(modal.classList);
  modal.classList.remove("hidden");
};
export const closeModal = () => {
  const closeBtn = modal.querySelector(".close_modal");
  const overlay = modal.querySelector(".modal_overlay");

  modal.classList.add("hidden");
};
