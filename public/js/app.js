console.log('app.js is loaded');

$(document).ready(function(){

  $(window).stellar({
    horizontalScrolling: false
  });


  $('#gen-ipsum-btn').on('click', function(formNumber){
    var formNumber = document.getElementById('form-number').value;

    $.getJSON('/data/ipsum.json', function(json) {
      var ipsumJson = json;

      // create paragraphs
      var responseText = ''
      for (var i = formNumber; i > 0; i--) {
        console.log(i);

        // create sentences
        var paragraph = ''
        for (var sentCount = 7; sentCount > 0; sentCount--) {
          // define sentence length
          minSentLength = Math.ceil(5);
          maxSentLength = Math.floor(18);
          var sentLength =  Math.floor(Math.random() * (maxSentLength - minSentLength)) + minSentLength;

          // pick words / create a sentence
          var sentence = ''
          for (var workingWordIndex = sentLength; workingWordIndex > 0; workingWordIndex--) {

            minWordIndex = Math.ceil(0);
            maxWordIndex = Math.floor(63);
            var wordIndexInt =  Math.floor(Math.random() * (maxWordIndex - minWordIndex)) + minWordIndex;
            var newWord = ipsumJson[Object.keys(ipsumJson)[wordIndexInt]];
            sentence += ' ' + newWord;
          }
          sentence += '. ';
          var capitalizedSentence = sentence[1].toUpperCase() + sentence.slice(2);

          paragraph += capitalizedSentence;
        }
        responseText += paragraph += '<br><br>';
      }
      render(responseText);
    });
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

