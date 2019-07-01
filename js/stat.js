'use strict';

(function () {
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

  var getRandomColor = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return 'rgb( 0,  0, ' + rand + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 125, 40);
    ctx.fillText('Список результатов:', 125, 55);
    var maxTime = getMaxElement(times);
    for (var i = 0; i < names.length; i++) {
      ctx.fillText(names[i], CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - GAP);
      ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor(100, 255);
      ctx.fillRect(CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - (GAP + FONT_GAP) * 2 - (BAR_HEIGHT * times[i] / maxTime));
    }
  };
})();
