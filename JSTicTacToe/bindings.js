// This file will contain functions that pull the current status of the TicTacToe tables.
// so if the table has an X that will be represented as 0 and if it is O that will be represented as 1

$(document).ready(function () {
    $("td,div").click(function () {
        $(this).text("x");
    });
});