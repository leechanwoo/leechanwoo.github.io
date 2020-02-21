// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromUIEvent = Web_Internal_FFI.unsafeReadProtoTagged("TouchEvent");
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("TouchEvent");
module.exports = {
    fromUIEvent: fromUIEvent,
    fromEvent: fromEvent,
    toUIEvent: toUIEvent,
    toEvent: toEvent,
    touches: $foreign.touches,
    targetTouches: $foreign.targetTouches,
    changedTouches: $foreign.changedTouches,
    altKey: $foreign.altKey,
    metaKey: $foreign.metaKey,
    ctrlKey: $foreign.ctrlKey,
    shiftKey: $foreign.shiftKey
};
