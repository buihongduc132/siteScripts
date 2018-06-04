const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
    youtubeVideo() {
        return (new JSDOM(``, {
            url: `https://www.youtube.com/watch?v=EdMDsg8mL8w&t=1221s`
        })).window.document;
    },
    general() {
        return (new JSDOM(`
        <body>
        TestingBody
        </body>
        `, {
                url: `https://testing.com`,
                contentType: "text/html",
            })).window.document;
    }
}