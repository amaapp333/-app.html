// Ad must call `APPNEXUS.expand()` inside the `APPNEXUS.ready`
APPNEXUS.ready(function () {
  ...
  APPNEXUS.setExpandProperties({
    interstitial : true
  });
  APPNEXUS.expand();
});
