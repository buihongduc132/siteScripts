let css = {
    button: `
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        color: initial;
    `
}

module.exports = {
    buildGotoButton(location, text) {
        return `<a href="${location}" style="${css.button}">${text}</a>`
    },
    buildFunctionButton(functionName, text) {
        return `<a href="javascript:void(0)" style="${css.button}" onclick="${functionName}()">${text}</a>`
    }
}