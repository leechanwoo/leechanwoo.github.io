// Generated by purs version 0.12.5
"use strict";
var Effect_Exception = require("../Effect.Exception/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var unsafeThrowException = function ($0) {
    return Effect_Unsafe.unsafePerformEffect(Effect_Exception.throwException($0));
};
var unsafeThrow = function ($1) {
    return unsafeThrowException(Effect_Exception.error($1));
};
module.exports = {
    unsafeThrowException: unsafeThrowException,
    unsafeThrow: unsafeThrow
};
