// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var getElementById = function (eid) {
    return function ($0) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_getElementById"](eid)($0));
    };
};
module.exports = {
    getElementById: getElementById
};
