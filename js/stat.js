'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var DISTANCE = 50;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', 120, 35);
  ctx.strokeText('Список результатов:', 120, 55);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var saturation = Math.round(getRandomNumber(10, 100));
    var color = 'hsl(240, ' + saturation + '%' + ', 50%)';
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }

    ctx.strokeText(names[i], CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
    ctx.fillStyle = '#000';
    ctx.strokeText(Math.round(times[i]), CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - (GAP + FONT_GAP) * 2 - (BAR_HEIGHT * times[i] / maxTime));
  }
};
