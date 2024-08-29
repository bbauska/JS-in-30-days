(function (window, undefined) {
  // It's a row of menu on navigation you hover over it.
  var menuList = document.querySelectorAll('.cool > li');
  
  // It's obviously a dynamic background that follow along
  // that "mega menu".
  var background = document.querySelector('.dropdownBackground');
  
  var navigation = document.querySelector('.top');

  function handleMouseEnter() {
    // Lexical `this`.
    var owningObject = this;
    var dropdown, dropdownCoords, navCoords, coords;

    background.classList.add('open');
    owningObject.classList.add('trigger-enter');

    setTimeout(function () {
      if (owningObject.classList.contains('trigger-enter')) {
        owningObject.classList.add('trigger-enter-active');
      }
    }, 150);

    // Here's the mega menu you want to display
    dropdown = owningObject.querySelector('.dropdown');

    // Get the coordinate of mega menu relative to its viewport
    dropdownCoords = dropdown.getBoundingClientRect();
  
    // Get the coordinate of navigation relative to its viewport
    navCoords = nav.getBoundingClientRect();

    coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,

      // Why? Because when you add yet another element on top of mega menu,
      // you will see the background rather off because that added element
      // takes up an area in which the background that follow along mega
      // menu stays away from its expected position. So, the offset top
      // must be adjusted this way.
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty(
      'transform',
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }

  function handleMouseLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }

  menuList.forEach(function (menu) {
    menu.addEventListener('mouseenter', handleMouseEnter);
    menu.addEventListener('mouseleave', handleMouseLeave);
  });
})(window);