"use strict";

(function() {
    // The paywall activation script blows up if it can't read
    // _hs_hist in localStorage.

    window.localStorage.setItem('_hs_hist', 'garbage][');
})();
