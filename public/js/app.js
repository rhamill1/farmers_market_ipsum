console.log('app.js is loaded');

$(document).ready(function(){

  $(window).stellar({
    horizontalScrolling: false
  });


  $('#gen-ipsum-btn').on('click', function(formNumber){
    var formNumber = document.getElementById('form-number').value;
    console.log(formNumber);
    render(formNumber);
  });

  function render(data){
    $('#response').empty();
    $('#response').append(data);
  }

})


$(window).scroll(function(){
  var fromTop = $(document).scrollTop();
  var opacityValue = (100 - (fromTop * .3)) / 100
  $('.title-box').css({
    opacity: opacityValue
  });
});

