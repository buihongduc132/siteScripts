const youtubeBundle = require('./sites/youtube/build').getModules();
const facebookBundle = require('./sites/facebook/build').getModules();
const currentPath = require('path').dirname(__dirname);
const fs = require(`fs`);
const tamperMonkeyTemplate = require('./Template/tamperMonkey');
const pageTemplate = require('./template/page');
const _ = require('lodash');

function saveScript(type, name, script) {
    fs.writeFile(`${currentPath}/Built Script/${type}/${name}.js`, script, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

function bundleModulesBySite(site, modules) {
    return _.map(modules, (module) => {
        module.site = site;
        module.content = pageTemplate.buildContent(module);
        module.name = `${site}-${module.name}`;

        return module;
    })
}

function bundleAllModule() {
    return _.concat(
        bundleModulesBySite("Youtube", youtubeBundle),
        bundleModulesBySite("Facebook", facebookBundle)
    );
}

let allModules = bundleAllModule();

module.exports = {
    buildPageScripts() {
        for (let i = 0; i < allModules.length; i++) {
            let currentModule = allModules[i];
            saveScript(`raw`,`${currentModule.name}`, currentModule.content);
        }
    },

    buildTamperMonkeyScripts() {
        for (let i = 0; i < allModules.length; i++) {
            let currentModule = allModules[i];
            saveScript(`tamperMonkey`, `${currentModule.name}`, tamperMonkeyTemplate.getScript(currentModule));
        }
    },

    buildAll() {
        this.buildPageScripts();
        this.buildTamperMonkeyScripts();
    }
}

