$(document).ready(function() {
    var currentJumbotron = 1;
    var numJumbotrons = $('.jumbotron').length;
    var blocked = false;

    $(window).scroll(function() {
        if (!blocked && !scrolling) {
            scrolling = true;
            setTimeout(function() {
                handleScroll();
                scrolling = false;
            }, 1000);
        }
    });

    $(window).on('wheel', function(event) {
        if (blocked) return;

        if (event.originalEvent.deltaY < 0) {
            // Scrolling up
            if (currentJumbotron > 1) {
                currentJumbotron--;
                blocked = true;
                $('html, body').animate({
                    scrollTop: $('.jumbotron-' + currentJumbotron).offset().top
                }, 500, function() {
                    blocked = false;
                });
            }
        } else {
            // Scrolling down
            if (currentJumbotron < numJumbotrons) {
                currentJumbotron++;
                blocked = true;
                $('html, body').animate({
                    scrollTop: $('.jumbotron-' + currentJumbotron).offset().top
                }, 500, function() {
                    blocked = false;
                });
            }
        }
    });

});