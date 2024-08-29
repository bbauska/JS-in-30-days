(function (window, undefined) {
  var speedSlider = document.querySelector('.speed');
  var video = document.querySelector('.video-player');
  var speedBar = document.querySelector('.speed-bar');
  var isDown = false;

  function handleSliderMove(event) {
    var y = event.pageY - this.offsetTop;
    var ratio = y / this.offsetHeight;
    var min = 0.4;
    var max = 4;
    var height = Math.round(ratio * 100) + '%';
    var playbackRate = ratio * (max - min) + min;

    if (!isDown) {
      return;
    }

    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  }

  speedSlider.addEventListener('mouseup', function () {
    isDown = false;
  });

  speedSlider.addEventListener('mousedown', function () {
    isDown = true;
  });

  speedSlider.addEventListener('mousemove', handleSliderMove);
})(window);