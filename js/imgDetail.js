$(document).ready(function () {
    $(document).on('click', '.like', function () {
        $(this).children().toggleClass('liked');

        var number = $(this).children('span').text();

        if ($(this).children().hasClass('liked')) {
            $(this).children('span').text(number * 1 + 1);
        } else {
            $(this).children('span').text(number * 1 - 1);
        }
    });

    $(document).on('click', '.btn-send', function (e) {
        var yourCmt = $('#your-cmt').val();
        if ($.trim($('#your-cmt').val()) != '') {
            var html = "<div class='comments'><div class='auth'>Your comments</div><div>"+ yourCmt +"</div></div>";
            $('.content-comment').append(html);
        }
    });
});
