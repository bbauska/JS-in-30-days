(function (window, undefined) {
  var allLinks = document.getElementsByTagName('a');
  var highlighter = document.createElement('span');

  // Add custom styling for highlighter.
  highlighter.classList.add('highlight');
  document.body.appendChild(highlighter);

  // It's for iterating DOM elements. The Array.prototype.forEach
  // won't work with NodeList.
  function forEach(callback) {
    for (var i = 0; i < this.length; i++) {
      callback.call(this, this[i], i);
    }
  }

  function highlightLink() {
    var linkCoordinate = this.getBoundingClientRect();
    var coordinate = {
      width: linkCoordinate.width,
      height: linkCoordinate.height,
      top: linkCoordinate.top + window.scrollY,
      left: linkCoordinate.left + window.scrollX
    };


    highlighter.style.width = `${coordinate.width}px`;
    highlighter.style.height = `${coordinate.height}px`;
    highlighter.style.transform = `
      translate(${coordinate.left}px, ${coordinate.top}px)
    `;
  }

  forEach.call(allLinks, function (link) {
    link.addEventListener('mouseenter', highlightLink);
  });
})(window);