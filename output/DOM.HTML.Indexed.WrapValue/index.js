// Generated by purs version 0.12.5
"use strict";
var Hard = (function () {
    function Hard() {

    };
    Hard.value = new Hard();
    return Hard;
})();
var Soft = (function () {
    function Soft() {

    };
    Soft.value = new Soft();
    return Soft;
})();
var renderWrapValue = function (v) {
    if (v instanceof Hard) {
        return "hard";
    };
    if (v instanceof Soft) {
        return "soft";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.WrapValue (line 8, column 19 - line 10, column 11): " + [ v.constructor.name ]);
};
module.exports = {
    Hard: Hard,
    Soft: Soft,
    renderWrapValue: renderWrapValue
};
