
module.exports = {
    getScript(scriptConfig) {
        return `
        // ==UserScript==
// @name         ${scriptConfig.name}
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        ${scriptConfig.pattern}
// @run-at      document-end
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    ${scriptConfig.content}
})();
`
    }
}