$(document).ready(function () {

    $(window).width( function () {
        if ($(this).width() > 780) {
            $('.slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
                nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
                // autoplay: true,
                // autoplaySpeed: 5000,
            });

            $('.slider2').slick({
                slidesToShow: 5,
                slidesToScroll: 2,
                prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
                nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
                autoplay: true,
                autoplaySpeed: 5000,
            });

        } else {
            $('.slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:"<i class='fas fa-chevron-left slick-prev'></i>",
                nextArrow:"<i class='fas fa-chevron-right slick-next'></i>",
                autoplay: true,
                autoplaySpeed: 5000,
            });

            $('.slider2').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:"<i class='fas fa-chevron-left slick-prev'></i>",
                nextArrow:"<i class='fas fa-chevron-right slick-next'></i>",
                autoplay: true,
                autoplaySpeed: 5000,
            });
        }
    });

    $(document).on('click', '.like', function () {
        $(this).children().toggleClass('liked');
    });

    // $(window).resize( function () {
    //     console.log('?')
    //     if ($(this).width() > 780) {
    //         $('.slider').slick({
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             // prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
    //             // nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
    //             autoplay: true,
    //             autoplaySpeed: 1000,
    //         });
    //     } else {
    //         $('.slider').slick({
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             // prevArrow:"<i class='fas fa-chevron-left slick-prev'></i>",
    //             // nextArrow:"<i class='fas fa-chevron-right slick-next'></i>",
    //             autoplay: true,
    //             autoplaySpeed: 1000,
    //         });
    //     }
    // });
});