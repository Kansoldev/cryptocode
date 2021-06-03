$(function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });

    $(".testimonial-container").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1300,
        autoplay: true,
    });
});
