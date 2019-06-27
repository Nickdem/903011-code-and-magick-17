'use strict';

(function () {
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var NUMBER_OF_WIZARDS = 4;

var getRandomElement = function (array) {
  var random = Math.floor(Math.random() * array.length);

  return array[random];
};

var getRandomName = function (namesArray, lastNamesArray) {
  var firstName = getRandomElement(namesArray);
  var secondName = getRandomElement(lastNamesArray);

  return firstName + ' ' + secondName;
};

var getRandomWizard = function () {
  var randomWizard = {};
  randomWizard.name = getRandomName(NAMES, LAST_NAMES);
  randomWizard.coatColor = getRandomElement(COAT_COLORS);
  randomWizard.eyesColor = getRandomElement(EYES_COLORS);

  return randomWizard;
};

var getWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function (wizardData) {
  var similarWizard = similarWizardTemplate.cloneNode(true);

  similarWizard.querySelector('.setup-similar-label').textContent = wizardData.name;
  similarWizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  similarWizard.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

  return similarWizard;
};

var addWizards = function (wizardsArray) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(renderWizard(getWizardsArray(NUMBER_OF_WIZARDS)[i]));
  }

  return fragment;
};

similarListElement.appendChild(addWizards(getWizardsArray(NUMBER_OF_WIZARDS)));

document.querySelector('.setup-similar').classList.remove('hidden');
})();
