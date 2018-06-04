const pageTemplate = require(`../../template/page`);
const downloaderModule = require(`./modules/downloader`);
const _ = require('lodash');

module.exports = {
    getModules() {
        return [
            downloaderModule
        ];
    }
}