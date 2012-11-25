"use strict";

(function() {
    var real_paywall;
    var paywall_instance;

    function set_paywall_instance(value) {
        paywall_instance = value;
        paywall_instance.daysBack = 0;
        paywall_instance.onArticleRead = function () {};
    };

    function define_pw_property(obj) {
        Object.defineProperty(obj, 'paywall', {
            set: function(value) {
                real_paywall = value;
                Object.defineProperty(real_paywall, 'instance', {
                    set: set_paywall_instance,
                    get: function() { return paywall_instance; }});
            },
            get: function() {
                return real_paywall;
            },
            configurable: true
        });
    }

    if (window.hs) {
        define_pw_property(window.hs);
    } else {
        // The hs is not yet defined, so we need to catch when it is
        // added to window.
        var real_hs;
        Object.defineProperty(window, 'hs', {
            set: function(value) {
                real_hs = value;
                define_pw_property(real_hs);
            },
            get: function() { return real_hs; }
        });
    }
})();
