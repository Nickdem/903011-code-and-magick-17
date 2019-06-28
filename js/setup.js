'use strict';

(function () {
  var setupPopup = document.querySelector('.setup');
  window.setupPopup = setupPopup;
  var wizardCoat = setupPopup.querySelector('.wizard-coat');
  var wizardCoatInput = setupPopup.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPopup.querySelector('.wizard-eyes');
  var wizardEyesInput = setupPopup.querySelector('input[name="eyes-color"]');
  var fireball = setupPopup.querySelector('.setup-fireball');
  var fireballInput = setupPopup.querySelector('input[name="fireball-color"]');

  var keyCode = {
    ESC: 27,
    Enter: 13
  };
  window.keyCode = keyCode;

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

  window.openPopup = openPopup;

  var closePopup = function () {
    setupPopup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  window.closePopup = closePopup;

  var onCoatClick = function () {
    var color = window.getRandomElement(window.wizRen.coat);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  var onEyesClick = function () {
    var color = window.getRandomElement(window.wizRen.eyes);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  var onFireballClick = function () {
    var color = window.getRandomElement(window.wizRen.fireball);
    fireball.style.backgroundColor = color;
    fireballInput.value = color;
  };

  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
