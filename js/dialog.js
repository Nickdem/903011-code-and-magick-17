'use strict';

var setupPopup = document.querySelector('.setup');
var setupPopupHandler = setupPopup.querySelector('.upload');

setupPopupHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: moveEvt.clientX - startCoords.x,
      y: moveEvt.clientY - startCoords.y
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupPopup.style.top = (setupPopup.offsetTop + shift.y) + 'px';
    setupPopup.style.left = (setupPopup.offsetLeft + shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (upPrevEvt) {
        upPrevEvt.preventDefault();
        setupPopupHandler.removeEventListener('click', onClickPreventDefault);
      };
      setupPopupHandler.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
// перемещение предметов
var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName === 'IMG') {
    draggedItem = evt.target.cloneNode(true); // .cloneNode(true) чтоб можно было брать много предметов
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

var artifactsElement = document.querySelector('.setup-artifacts');

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});


artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});
