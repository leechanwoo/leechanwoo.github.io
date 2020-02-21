// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var URL = function (x) {
    return x;
};
var DocumentTitle = function (x) {
    return x;
};
var Delta = function (x) {
    return x;
};
var newtypeURL = new Data_Newtype.Newtype(function (n) {
    return n;
}, URL);
var newtypeDocumentTitle = new Data_Newtype.Newtype(function (n) {
    return n;
}, DocumentTitle);
var newtypeDelta = new Data_Newtype.Newtype(function (n) {
    return n;
}, Delta);
var eqURL = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordURL = new Data_Ord.Ord(function () {
    return eqURL;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqDocumentTitle = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordDocumentTitle = new Data_Ord.Ord(function () {
    return eqDocumentTitle;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqDelta = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordDelta = new Data_Ord.Ord(function () {
    return eqDelta;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
module.exports = {
    DocumentTitle: DocumentTitle,
    Delta: Delta,
    URL: URL,
    eqDocumentTitle: eqDocumentTitle,
    ordDocumentTitle: ordDocumentTitle,
    newtypeDocumentTitle: newtypeDocumentTitle,
    eqDelta: eqDelta,
    ordDelta: ordDelta,
    newtypeDelta: newtypeDelta,
    eqURL: eqURL,
    ordURL: ordURL,
    newtypeURL: newtypeURL,
    back: $foreign.back,
    forward: $foreign.forward,
    go: $foreign.go,
    pushState: $foreign.pushState,
    replaceState: $foreign.replaceState,
    state: $foreign.state
};
