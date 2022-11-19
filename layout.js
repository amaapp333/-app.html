APPNEXUS.ready(function () {
  var fullscreenButton = document.getElementById('fullscreen-button');

  APPNEXUS.setExpandProperties({
    width: 600,
    height: 500,
    floating: true,
    expand: {
      easing: 'ease-in-out',
      duration: 1000
    }
  });

  // Expands on click
  fullscreenButton.addEventListener("hover", function () {
   APPNEXUS.expand();
  });
});
