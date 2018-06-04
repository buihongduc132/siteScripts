
let toolDiv = document.createElement('div');
toolDiv.setAttribute('style', `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    `);
toolDiv.innerHTML = `<a href="https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121&url=${encodeURIComponent(document.URL)}&format=avi" style="
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    ">Download Video</a>`;
document.body.appendChild(toolDiv);
