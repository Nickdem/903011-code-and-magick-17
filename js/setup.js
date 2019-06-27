'use strict';

(function () {
  var setupPopup = document.querySelector('.setup');
  var wizardCoat = setupPopup.querySelector('.wizard-coat');
  var wizardCoatInput = setupPopup.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPopup.querySelector('.wizard-eyes');
  var wizardEyesInput = setupPopup.querySelector('input[name="eyes-color"]');
  var fireball = setupPopup.querySelector('.setup-fireball');
  var fireballInput = setupPopup.querySelector('input[name="fireball-color"]');

  var onCoatClick = function () {
    var color = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  var onEyesClick = function () {
    var color = getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  var onFireballClick = function () {
    var color = getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = color;
    fireballInput.value = color;
  };

  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);

  window.setup = {
    setupPopup: setupPopup
  }
})();
