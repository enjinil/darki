**JavaScript**
```javascript
document
  .querySelectorAll(".dropdown__trigger")
  .forEach(attachToggleDropdown);

function attachToggleDropdown($trigger) {
  $trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.closest(".dropdown").classList.toggle("is-active");
    e.target.blur();
  });
}
```

The example script is already included in `src/main.js`.