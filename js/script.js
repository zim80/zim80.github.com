var link = document.querySelector(".button-contact-red");
var popup = document.querySelector(".modal-wright-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".wright-form");
var fullname = popup.querySelector("[name=first-name]");
var mail = popup.querySelector("[name=your-email]");
var typetext = popup.querySelector("#wright-area");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("fullname");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    fullname.value = storage;
    mail.focus();
  } else {
  fullname.focus();
}
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!fullname.value || !mail.value|| !typetext.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя, емейл и текст сообщения");

  } else {
    if (isStorageSupport) {
    localStorage.setItem("fullname", fullname.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

