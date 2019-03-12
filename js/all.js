$(document).ready(function () {

    //內部聯結
    $("#point-href").click(function () {
        $("html, body").animate({
            scrollTop: $("#point").offset().top
        }, {
            duration: 800,
            easing: "swing"
        });
        return false;
    });

    $("#main-chef-href").click(function () {
        $("html, body").animate({
            scrollTop: $("#main-chef").offset().top
        }, {
            duration: 800,
            easing: "swing"
        });
        return false;
    });

    $("#reserve-href").click(function () {
        $("html, body").animate({
            scrollTop: $("#reserve").offset().top
        }, {
            duration: 800,
            easing: "swing"
        });
        return false;
    });

    //返回頂端
    $('#to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 333);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#to-top').fadeIn(200);
        } else {
            $('#to-top').stop().fadeOut(200);
        }
    }).scroll();

    //選單
    $('#menu-icon-toggle').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('#menu-icon-toggle').toggleClass('active');
        $('#menu').slideToggle(150,);
    });

});