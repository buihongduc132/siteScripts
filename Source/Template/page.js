let css = {
    toolPosition: `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    `
}

module.exports = {
    buildContent(module) {
        let htmlContent = module.htmlContent;
        let scriptContent = module.scriptContent || '';

        return `
        let toolDiv = document.body.querySelector('#selfToolDiv');
        if(!toolDiv) {
            toolDiv = document.createElement('div');
            
            toolDiv.id = 'selfToolDiv';
            toolDiv.setAttribute('style', \`${css.toolPosition}\`);
            toolDiv.innerHTML = \`${htmlContent}\`;

            document.body.appendChild(toolDiv);
        }

        else {
            toolDiv.innerHTML += \`${htmlContent}\`;
        }

        let toolScript = document.body.querySelector('#selfToolScript');
        if(!toolScript) {
            toolScript = document.createElement('script');

            toolScript.id = 'selfToolScript';
            toolScript.innerHTML = \`${scriptContent}\`;

            document.body.appendChild(toolScript);
        }

        else {
            toolScript.innerHTML += \`${scriptContent}\`;
        }

    `;
    }
}