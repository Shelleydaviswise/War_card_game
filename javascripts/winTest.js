
define(function(require){

  var player1Win = 0;
  var player2Win = 0;

  return {

    checkWin: function (player1, player2) {

      if (player1 === "ACE") {
        player1 = 14;
      } else if (player1 === "KING") {
        player1 = 13;
      } else if (player1 === "QUEEN") {
        player1 = 12;
      } else if (player1 === "JACK") {
        player1 = 11;
      }

      if (player2 === "ACE") {
        player2 = 14;
      } else if (player2 === "KING") {
        player2 = 13;
      } else if (player2 === "QUEEN") {
        player2 = 12;
      } else if (player2 === "JACK") {
        player2 = 11;
      }

      if (player1 > player2) {
        player1Win++;
        $('.player1Score').html("<h1 value=" + player1Win + "><b>" + player1Win + "</b></h1>");
      } else if (player1 < player2) {
        player2Win++;
        $('.player2Score').html("<h1 value=" + player2Win + "><b>" + player2Win + "</b></h1>");
      } else if (player1 === player2) {
        alert("It's a draw");
      }

    }
  };
});