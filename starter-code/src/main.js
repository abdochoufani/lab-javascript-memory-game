var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.shuffleCards(cards);
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    if(memoryGame.pickedCards.length<2) {
      $(this).parent().children().toggleClass("front back");
      memoryGame.pickedCards.push($(this).parent());
    }
    if(memoryGame.pickedCards.length ===2) {
      $(this).attr("disabled", true);
      var firstCard=memoryGame.pickedCards[0].data("card-name");
      var secondCard=memoryGame.pickedCards[1].data("card-name");
      if(memoryGame.checkIfPair(firstCard,secondCard)){
        memoryGame.pickedCards=[];
        $(this).attr("disabled", false);
      }
      if(memoryGame.isFinished()){
        alert("YOU WON")
      }else {
        setTimeout(function(){
          $('.back').attr("disabled", true);
          memoryGame.pickedCards[0].children().toggleClass("back front");
          memoryGame.pickedCards[1].children().toggleClass("back front");
          memoryGame.pickedCards=[]   
        },1000)
      }
    }

    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs-guessed").text(memoryGame.pairsGuessed);
  });
});


