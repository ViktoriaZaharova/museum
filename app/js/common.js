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



