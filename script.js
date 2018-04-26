$(function(event) {

  var player = 1;

var x = $("td");

$('td').on('click', function(event) {

    var squareClick = $(this);

    if (squareClick.hasClass('X') || squareClick.hasClass('O')) {
      alert('This square has already been selected');
    } else {

      if (player == 1) {
        squareClick.addClass('X')
        if (winnerCheck('X')) {
          alert("Player " + player + " has won")
        } else {
          player = 2;
          $(".playerTurn").html("It is O's turn")
        }
      } else {
        squareClick.addClass('O')
        if (winnerCheck('O')) {
          alert("Player " + player + " has won")
        } else {
          player = 1;
          $(".playerTurn").html("It is X's turn")
        }
      }
    }
  });

function winnerCheck(symbol) {


    if ((x.eq(0).hasClass(symbol)) && (x.eq(1).hasClass(symbol)) && (x.eq(2).hasClass(symbol))) {
      return true;
    }
    else if ((x.eq(3).hasClass(symbol)) && (x.eq(4).hasClass(symbol)) && (x.eq(5).hasClass(symbol))) {
      return true;
    } else if ((x.eq(6).hasClass(symbol)) && (x.eq(7).hasClass(symbol)) && (x.eq(8).hasClass(symbol))) {
      return true;
    } else if ((x.eq(0).hasClass(symbol)) && (x.eq(3).hasClass(symbol)) && (x.eq(6).hasClass(symbol))) {
      return true;
    } else if ((x.eq(1).hasClass(symbol)) && (x.eq(4).hasClass(symbol)) && (x.eq(7).hasClass(symbol))) {
      return true;
    } else if ((x.eq(2).hasClass(symbol)) && (x.eq(5).hasClass(symbol)) && (x.eq(8).hasClass(symbol))) {
      return true;
    } else if ((x.eq(0).hasClass(symbol)) && (x.eq(4).hasClass(symbol)) && (x.eq(8).hasClass(symbol))) {
      return true;
    } else if ((x.eq(2).hasClass(symbol)) && (x.eq(4).hasClass(symbol)) && (x.eq(6).hasClass(symbol))) {
      return true;
    } else {
      return false;
    }

};
$('#reset').on('click', function(event){
  x.removeClass("X O")
})

});
