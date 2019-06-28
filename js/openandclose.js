'use strict';

(function () {
var setupPopupOpen = document.querySelector('.setup-open');
var setupPopupClose = document.querySelector('.setup-close');

setupPopupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.keyCode.Enter) {
    openPopup();
  }
});

setupPopupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.keyCode.Enter) {
    closePopup();
  }
});

setupPopupOpen.addEventListener('click', window.openPopup);
setupPopupClose.addEventListener('click', window.closePopup);
})();
