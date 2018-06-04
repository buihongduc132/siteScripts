// const pageTemplate = require(`../../template/page`);
// const expandCommentModule = require(`./modules/expandComment`);

// module.exports = {
//     getPageContent() {
//         let modules = [
//             expandCommentModule
//         ];

//         let pageContent = pageTemplate.buildContent([expandCommentModule.content]);

//         return pageContent;
//     }
// }

const expandCommentModule = require(`./modules/expandComment`);
const _ = require('lodash');

module.exports = {
    getModules() {
        return [
            expandCommentModule
        ];
    }
}