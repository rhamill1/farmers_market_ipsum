console.log('app.js is loaded');

$(document).ready(function(){
  $(window).stellar({
    horizontalScrolling: false
  });

})

$(window).scroll(function(){
  var fromTop = $(document).scrollTop();
  var opacityValue = (100 - (fromTop * .3)) / 100
  $('.title-box').css({
    opacity: opacityValue
  });
});
