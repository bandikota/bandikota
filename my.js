$(function() {
    $(".change-btn").on("click", function() {
        $('body').toggleClass('dark-theme');
        $('body').toggleClass('light-theme');
    });
})
$(function() {
    $(".mobile-nav-btn").on("click", function() {
        $('.mobile-nav').toggleClass('open');
        $('.icon-menu').toggleClass('open');

    });
})
$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0.1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
    });
});

$(document).on("click", ".left-menu a", function(e) {
    var id = $(this).attr('href');
    var top = $(id).offset().top - 150; // получаем координаты блока
    $('body, html').animate({ scrollTop: top }, 100); // плавно переходим к блоку
});
$(function() {
    $(".mobile-nav a").on("click", function() {
        $('.mobile-nav').removeClass('open');
        $('.icon-menu').removeClass('open');
        var id = $(this).attr('href');
        var top = $(id).offset().top - 150; // получаем координаты блока
        $('body, html').animate({ scrollTop: top }, 100); // плавно переходим к блоку

    });
})