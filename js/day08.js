
  (function (window) {
    function drawOnCanvas() {
      var canvas = document.querySelector('#draw');
      var context = canvas.getContext('2d');
      var lineX = 0;
      var lineY = 0;
      var isDrawing = false;
      var direction = true;
      var hue = 0;

      // set the canvas attributes so it takes up the whole browser screen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // set the pencil
      context.strokeStyle = '#BADA55';
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.lineWidth = 1;

      // allow the canvas to be drawn and set pencil's position
      function letsDraw(event) {
        isDrawing = true;
        lineX = event.offsetX;
        lineY = event.offsetY;
      }

      // disallow the canvas to be drawn
      function letsNotDraw(event) {
        isDrawing = false;
      }

      // reset the color and line width if certain condition occurs
      function flipFlopColorAndLineWidth() {
        hue++;

        if (hue >= 360) {
          hue = 0;
        }

        if (context.lineWidth >= 100 || context.lineWidth <= 1) {
          direction = !direction;
        }

        if(direction) {
          context.lineWidth++;
        } else {
          context.lineWidth--;
        }
      }

      // actually draw on canvas with pencil
      function draw(event) {
        if (!isDrawing) {
          return;
        }

        context.beginPath();
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        context.moveTo(lineX, lineY);
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();

        lineX = event.offsetX;
        lineY = event.offsetY;

        flipFlopColorAndLineWidth();
      }

      // initialize the event listener
      function init() {
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', letsDraw);
        canvas.addEventListener('mouseup', letsNotDraw);
      }

      return {
        canvas: canvas,
        init: init
      };
    }

    var drawer = drawOnCanvas();
    drawer.init();
  })(window);
