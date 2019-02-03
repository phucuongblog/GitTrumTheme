jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Sticky Header
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var h = $("#header").height();
        if (y > h) {
            $("#header").addClass("is-sticky");
        } else {
            $("#header").removeClass("is-sticky");
        }
    });
    // Change icon navbar-toggler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('is-active').delay(300).queue(function(next){
            $(this).toggleClass('show-menu');
            next();
        });
    });
    // Show/ Hide .popup-list
    $('.action-btn').click(function(){
        $(this).next('.popup-list').css('display','block');
        $(this).children('.noti-number').css('display','none');
    }); 
    $(document).mouseup(function(e) {
        if (!$(".popup-list").is(e.target) && $(".popup-list").has(e.target).length === 0) {
            $(".popup-list").css('display','none');
        }
    });
    // Show/Hide search popup
    $('.mobile-search-btn').click(function(){
        $('.search-popup').addClass('show-popup');
    });
    $('.close-search').click(function(){
        $(this).addClass('is-active').delay(1000).queue(function(next){
            $(this).removeClass('is-active');
            next();
        });
        $('.search-popup').removeClass('show-popup');
    });
});