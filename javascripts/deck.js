
define(function(require){
  var $ = require("jquery");
  var hbs = require("hbs");
  var win = require("winTest");
  
  var deckID1;
  var deckID2;
  var player1;
  var player2;
  var turn = 0;

  $(document).on('click', '.fightp1', function(){
    $.getJSON("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", function(data){
      deckID1 = data.deck_id;
      console.log(data);
    });
  });

 $(document).on('click', '.fightp2', function(){
    $.getJSON("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", function(data){
      deckID2 = data.deck_id;
      console.log(data);
    });
  });
 
  $(document).on('click', '.p1btn', function(){
    if (turn % 2 !== 0) {
      alert("It's player 2's turn!");
    } else {
      $.getJSON("http://deckofcardsapi.com/api/deck/" + deckID1 + "/draw/?count=1", function(data){
        console.log("player1data", data);
        player1 = data.cards[0].value;
        console.log("player1",player1);
          require(['hbs!../templates/p1Tmpl'], function(template) {
            $('#left-panel').html(template(data));
          });
      });
    turn++;
    }
  });

  $(document).on('click', '.p2btn', function() {
    if (turn % 2 === 0){
      alert("It's Player One's turn!");
    }   else  {
      $.getJSON("http://deckofcardsapi.com/api/deck/" + deckID2 + "/draw/?count=1", function(data){
        console.log("p2data", data);
        player2 = data.cards[0].value;
        console.log('player2', player2);

          require(['hbs!../templates/p2Tmpl'], function(template) {
            $('#right-panel').html(template(data));
          });
          win.checkWin(player1, player2);
          if (Number(data.remaining) === 0) {
            var win1 = $('.player1Score>h1').attr('value');            
            var win2 = $('.player2Score>h1').attr('value'); 
            if (win1 > win2){
              alert("Player 1 wins");
            } else if (win1 < win2) {
              alert("Player 2 wins");
            } else if (win1 === win2) {
              alert("It's a draw");
            }     
          }
      });
    turn++;
    }
  });  
});
