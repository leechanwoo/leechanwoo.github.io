// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var previousElementSibling = function ($0) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_previousElementSibling"]($0));
};
var nextElementSibling = function ($1) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_nextElementSibling"]($1));
};
module.exports = {
    previousElementSibling: previousElementSibling,
    nextElementSibling: nextElementSibling
};
