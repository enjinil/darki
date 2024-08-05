**JavaScript**
```javascript
document
  .querySelectorAll('[data-target="modal"], .modal__close, [data-modal="close"]')
  .forEach(attachToggleModal);

function attachToggleModal(triggerEl) {
  triggerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.blur();

    const modalId =
      e.target.dataset.modalId || e.target.closest(".modal")?.id;

    toggleModalById(modalId);
  });
}

function toggleModalById(modalId) {
  const modalEl = document.getElementById(modalId);
  modalEl.classList.toggle("is-open");
}
```

The example script is already included in `src/main.js`.