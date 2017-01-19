$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.pagenumber').fadeIn();
    } else {
        $('.pagenumber').fadeOut();
    }

});