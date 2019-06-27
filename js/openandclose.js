'use strict';

(function () {
var setupPopupOpen = document.querySelector('.setup-open');
var setupPopupClose = window.setup.setupPopup.querySelector('.setup-close');

var keyCode = {
  ESC: 27,
  Enter: 13
};

var SETUP_START_X = '50%';
var SETUP_START_Y = '80px';

var onPopupEscPress = function (evt) {
  if (evt.keyCode === keyCode.ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setupPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupPopup.style.left = SETUP_START_X;
  setupPopup.style.top = SETUP_START_Y;
};

var closePopup = function () {
  setupPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupPopupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCode.Enter) {
    openPopup();
  }
});

setupPopupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCode.Enter) {
    closePopup();
  }
});

setupPopupOpen.addEventListener('click', openPopup);
setupPopupClose.addEventListener('click', closePopup);
})();
