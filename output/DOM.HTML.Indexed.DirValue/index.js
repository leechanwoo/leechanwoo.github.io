// Generated by purs version 0.12.5
"use strict";
var DirLTR = (function () {
    function DirLTR() {

    };
    DirLTR.value = new DirLTR();
    return DirLTR;
})();
var DirRTL = (function () {
    function DirRTL() {

    };
    DirRTL.value = new DirRTL();
    return DirRTL;
})();
var DirAuto = (function () {
    function DirAuto() {

    };
    DirAuto.value = new DirAuto();
    return DirAuto;
})();
var renderDirValue = function (v) {
    if (v instanceof DirLTR) {
        return "ltr";
    };
    if (v instanceof DirRTL) {
        return "rtl";
    };
    if (v instanceof DirAuto) {
        return "auto";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.DirValue (line 9, column 18 - line 12, column 14): " + [ v.constructor.name ]);
};
module.exports = {
    DirLTR: DirLTR,
    DirRTL: DirRTL,
    DirAuto: DirAuto,
    renderDirValue: renderDirValue
};
