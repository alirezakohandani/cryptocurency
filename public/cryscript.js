//box-shadow for online price
$(document).ready(function () {
    $('.online-price').hover(function () {
        $(this).css("box-shadow", "3px 3px 3px gray");
    });
    $('.online-price').mouseleave(function () {
        $(this).css("box-shadow", "none");
    });
});

//fourth section
$(document).ready(function () {
    $('.buy-button').hover(function () {
        $(this).css("background-color", "green");
    });
    $('.buy-button').mouseleave(function () {
        $(this).css("background-color", "#f63")
    })
});