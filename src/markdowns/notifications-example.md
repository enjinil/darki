Alert elements can be used as notification by putting them inside `.notifications` element.


Example function to show notification.

```javascript
let $notificationContainer = document.getElementById("notifications");

if (!$notificationContainer) {
  $notificationContainer = document.createElement("div");
  $notificationContainer.className = "notifications";
  document.body.appendChild($notificationContainer);
}

function notify(message, type = "", timeout = 3_000) {
  const $notification = document.createElement("div");
  $notification.className = ["alert", type && "alert--" + type].join(" ");
  $notification.innerText = message;

  $notificationContainer.appendChild($notification);

  setTimeout(function() {
    $notification.remove();
  }, timeout)
}
```

```html
<button class="button" onclick="notify('Successfully showed notification.', 'success')">
  Show Notification
</button>
```

The example script is already included in `src/main.js`.