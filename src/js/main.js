import Litepicker from "litepicker";

// Datepicker
addEventListener("load", () => {
  document
    .querySelectorAll(".datepicker, .daterangepicker")
    .forEach(initializeDatepicker);
});

function initializeDatepicker(el) {
  new Litepicker({
    element: el,
    singleMode: el.classList.contains("datepicker"),
    format: el.dataset.format || "YYYY-MM-DD",
  });
}

// Modal
addEventListener("load", () => {
  document
    .querySelectorAll(
      '[data-target="modal"], .modal__close, [data-modal="close"]'
    )
    .forEach(attachToggleModal);
});

function attachToggleModal(triggerEl) {
  triggerEl.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.blur();

    const modalId = e.target.dataset.modalId || e.target.closest(".modal")?.id;

    toggleModalById(modalId);
  });
}

function toggleModalById(modalId) {
  const modalEl = document.getElementById(modalId);
  modalEl.classList.toggle("is-open");
}

// Dropdown
addEventListener("load", () => {
  document.querySelectorAll(".dropdown__trigger").forEach(attachToggleDropdown);
})

function attachToggleDropdown($trigger) {
  $trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.blur();
    e.target.closest(".dropdown").classList.toggle("is-active");
  });
}

// Notification

addEventListener("load", () => {
  let $notificationContainer = document.getElementById("notifications");
  
  if (!$notificationContainer) {
    $notificationContainer = document.createElement("div");
    $notificationContainer.className = "notifications";
    $notificationContainer.id = "notifications";
    document.body.appendChild($notificationContainer);
  }

  function notify(message, type = "", timeout = 3_000) {
    const $notification = document.createElement("div");
    $notification.className = ["alert", type && "alert--" + type].join(" ");
    $notification.innerText = message;
  
    $notificationContainer.appendChild($notification);
  
    setTimeout(function () {
      $notification.remove();
    }, timeout);
  }
  
  window.notify = notify;
});

