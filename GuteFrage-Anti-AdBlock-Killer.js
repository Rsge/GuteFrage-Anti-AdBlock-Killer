// ==UserScript==
// @name           GuteFrage Anti-AdBlock-Killer

// @description    Entfernt das nervige Adblock-Banner auf GuteFrage.net.
// @description:en Removes the annoying adblock-reminder on German site "Gutefrage.net".

// @version        1.2.2
// @author         Rsge
// @copyright      2021+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://www.gutefrage.net/nmms-assets/images/immutable/logos/fb_gutefrage.png

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer
// @supportURL     https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer/issues


// @match          https://www.gutefrage.net/*

// @grant          none
// ==/UserScript==

(function() {
    'use strict';
    var node;
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            node = mutation.addedNodes[0];
            //console.log(node);
            if (mutation.addedNodes[0] != null && node.id == "wl-container") {
                node.remove();
                console.log(`
         ▄              ▄
        ▌▒█           ▄▀▒▌
        ▌▒▒▀▄       ▄▀▒▒▒▐
       ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
     ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
   ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██▀▒▌      such adblock
  ▐▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▒▌
  ▌▒▒▐▄█▀▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
 ▐▒▒▒▒▒▒▒▒▒▒▒▌██▀▒▒▒▒▒▒▒▒▀▄▌
 ▌▒▀▄██▄▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌   much freedom
 ▌▀▐▄█▄█▌▄▒▀▒▒▒▒▒▒░░░░░░▒▒▒▐
▐▒▀▐▀▐▀▒▒▄▄▒▄▒▒▒▒▒░░░░░░▒▒▒▒▌
▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒░░░░░░▒▒▒▐
 ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▒░░░░▒▒▒▒▌             wow
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
  ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▌
    ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
   ▐▀▒▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▀    https://github.com/Rsge/GuteFrage-Anti-AdBlock-Killer`);
            }
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
