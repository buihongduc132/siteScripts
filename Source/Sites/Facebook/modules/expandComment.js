const moduleTemplate = require('../../../template/module');

function buildHtml() {
    return moduleTemplate.buildFunctionButton('expandComments', "Expand Comments");
}

function buildScript() {
    return  `
    function testing() {
        alert(0);
    }

    function expandComments() {
        document.body.querySelectorAll('.UFIReplySocialSentenceLinkText').forEach((e) => {e.click()});
    }
    `;
}

module.exports = {
    name: 'Expand Comment',
    pattern: `*://www.facebook.com/*/posts/*`,
    htmlContent: buildHtml(),
    scriptContent: buildScript()
}