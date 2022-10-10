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

// $('.mobile-menu__close').on('click', function () {
//     $('.mobile-menu').fadeOut();
//     $('.btn-burger').removeClass('open');
//     $('header').removeClass('menu-open');
// });
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

$('.team-projects-wrapper .container').each(function () {
    if ($(this).find('.team-projects-item').length > 4) {
        $(this).find('.team-projects-item').slice(4).hide();
    }

});

$('.btn-toggle-team').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.team-projects-wrapper').find('.team-projects-item:hidden').slice(0, 4).fadeIn();

    var onBlock = $(this).prev('.team-projects-wrapper').find('.team-projects-item:hidden').length;
    if (onBlock <= 0) {
        $(this).hide();
    }
});

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


$('.product-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.history-museum-slider').slick({
    slidesToShow: 3,
    arrows: true,
    appendArrows: '.history-museum-slider__nav',
    variableWidth: true,
    centerMode: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                infinite: false,
                centerMode: false,
                appendArrows: '.history-museum-slider',
                prevArrow: '<button type="button" class="slick-prev"><span>→</span></button>',
                nextArrow: '<button type="button" class="slick-next"><span>→</span></button>',
                adaptiveHeight: true
            }
        }
    ]
});

$('.arranged-icon-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    infinite: false,
    arrows: true,
    appendArrows: '.arranged-icon-slider__nav',
    prevArrow: '<button type="button" class="slick-prev">Предыдущая икона</button>',
    nextArrow: '<button type="button" class="slick-next">Следующая икона</button>',
});

$('.tooltip-icon').on('click', function () {
   $(this).siblings('.tooltip-box').fadeIn();
});

$('.tooltip-box__close').on('click', function (e) {
    e.preventDefault();
    $('.tooltip-box').fadeOut();
});

$('.comparison-item-click').on('click', function () {
    $('.comparison-item').removeClass('active');
    $(this).addClass('active');
});

$('.history-museum-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    $('*[data-index="'+ currentSlide +'"]').removeClass("active");
    $('*[data-index="'+ nextSlide +'"]').addClass("active");
});

$('.history-museum-timeline-slider .history-museum-timeline__item').click(function() {
    var $this = $(this);
    $('.history-museum-timeline__item').removeClass('active');
    $this.addClass('active');
    $('.history-museum-slider').slick('slickGoTo', $this.data('index'));
});


