// Add your scripts here

function roundNumber(number, decimals) {
  return Math.round(number * 10 * decimals) / (10 * decimals);
}

document.onmousemove = function(e) {
  var documentHalfSize = {
    width: Math.round(window.innerWidth / 2),
    height: Math.round(window.innerHeight / 2),
  };

  var mouseCoords = {
    x: e.clientX - documentHalfSize.width,
    y: e.clientY - documentHalfSize.height,
  };

  var tileAngle = {
    x: roundNumber(mouseCoords.y * 8 / documentHalfSize.height, 2),
    y: roundNumber(mouseCoords.x * 15 / documentHalfSize.width, 2),
  };

  document.getElementById('triktrak-show').style.transform = 'rotateX(' + tileAngle.x + 'deg) rotateY(' + tileAngle.y + 'deg)';
};
