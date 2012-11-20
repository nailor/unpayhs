"use strict";

(function() {
    var target = document.querySelector('#article-main-alternative'),
        paywall = document.querySelectorAll('div.paywall, .paywall-content'),
        forEach = Array.prototype.forEach;
    target.style.display = 'block';

    forEach.call(paywall, function(element) {
        element.style.display = 'none';
    });
})();
