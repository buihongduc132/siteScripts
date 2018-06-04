
        // ==UserScript==
// @name         Facebook-Expand Comment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.facebook.com/*/posts/*
// @run-at      document-end
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    
        let toolDiv = document.body.querySelector('#selfToolDiv');
        if(!toolDiv) {
            toolDiv = document.createElement('div');
            
            toolDiv.id = 'selfToolDiv';
            toolDiv.setAttribute('style', `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    `);
            toolDiv.innerHTML = `<a href="javascript:void(0)" style="
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    " onclick="expandComments()">Expand Comments</a>`;

            document.body.appendChild(toolDiv);
        }

        else {
            toolDiv.innerHTML += `<a href="javascript:void(0)" style="
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    " onclick="expandComments()">Expand Comments</a>`;
        }

        let toolScript = document.body.querySelector('#selfToolScript');
        if(!toolScript) {
            toolScript = document.createElement('script');

            toolScript.id = 'selfToolScript';
            toolScript.innerHTML = `
    function testing() {
        alert(0);
    }

    function expandComments() {
        document.body.querySelectorAll('.UFIReplySocialSentenceLinkText').forEach((e) => {e.click()});
    }
    `;

            document.body.appendChild(toolScript);
        }

        else {
            toolScript.innerHTML += `
    function testing() {
        alert(0);
    }

    function expandComments() {
        document.body.querySelectorAll('.UFIReplySocialSentenceLinkText').forEach((e) => {e.click()});
    }
    `;
        }

    
})();
