const moduleTemplate = require('../../../template/module');

let downloaderUrl = `https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121`;

function buildHtml() {
    let url = `${downloaderUrl}&url=\${encodeURIComponent(document.URL)}&format=mp3`;
    return moduleTemplate.buildGotoButton(url, "Download");
}

module.exports = {
    name: 'Downloader',
    pattern: `*://www.youtube.com/*`,
    htmlContent: buildHtml()
}