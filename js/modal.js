export const openModal = () => {
  const modal = document.querySelector(".modal");

  const OpenBtn = document.querySelector(".open_modal");
  console.log(modal);
  modal.classList.remove("hidden");
};

export const closeModal = () => {
  const modal = document.querySelector(".modal");
  const closeBtn = modal.querySelector(".close_modal");
  const overlay = modal.querySelector(".modal_overlay");
  modal.classList.add("hidden");
};
