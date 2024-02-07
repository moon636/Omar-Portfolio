document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.fade-in-element');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isElementInViewport(element)) {
            element.classList.add("fade-in");
        }
    }

    window.addEventListener("scroll", function() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (isElementInViewport(element)) {
                element.classList.add("fade-in");
            }
        }
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});