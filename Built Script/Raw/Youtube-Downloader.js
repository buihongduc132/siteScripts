
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
            toolDiv.innerHTML = `<a href="https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121&url=${encodeURIComponent(document.URL)}&format=mp3" style="
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    ">Download</a>`;

            document.body.appendChild(toolDiv);
        }

        else {
            toolDiv.innerHTML += `<a href="https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121&url=${encodeURIComponent(document.URL)}&format=mp3" style="
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    ">Download</a>`;
        }

        let toolScript = document.body.querySelector('#selfToolScript');
        if(!toolScript) {
            toolScript = document.createElement('script');

            toolScript.id = 'selfToolScript';
            toolScript.innerHTML = ``;

            document.body.appendChild(toolScript);
        }

        else {
            toolScript.innerHTML += ``;
        }

    