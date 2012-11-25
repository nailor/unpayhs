// Chrome runs extensions in an isolated environment and to access the
// hs variable, we need to infect our script on the site.

// Empty the _hs_hist from localStorage to avoid problems upon
// updating the extension
localStorage.removeItem('_hs_hist');

var script = document.createElement('script');
script.src = chrome.extension.getURL('js/unpay.js');
script.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(script);
