// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $('.panel_heading').removeClass('in');

        $(this).parent().toggleClass('in');
    });
}

accordeon();

// accordeon end


// mobile menu
$('.btn-burger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-menu').fadeToggle();
    $('header').toggleClass('menu-open');
});

$('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.btn-burger').removeClass('open');
    $('header').removeClass('menu-open');
});
// mobile menu end


// hidden list > 10
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.list-tags').each(function () {
            if ($(this).find('li').length > 10) {
                $(this).find('li').slice(10).hide();
                $(this).append('<li class="list-tags-item"><a href="#" class="list-tags-toggle">Все теги</a></li>');
            }
        });

        $('.list-tags-toggle').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                content = $(this).parents('.list-tags').find('li:hidden');

            content.fadeIn();
            $this.hide();
        });

    }
});

$('.product-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});


