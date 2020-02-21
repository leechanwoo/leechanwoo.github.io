// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Web_Event_EventPhase = require("../Web.Event.EventPhase/index.js");
var EventType = function (x) {
    return x;
};
var target = function ($4) {
    return Data_Nullable.toMaybe($foreign["_target"]($4));
};
var ordEventType = Data_Ord.ordString;
var newtypeEventType = new Data_Newtype.Newtype(function (n) {
    return n;
}, EventType);
var eventPhase = function (dictPartial) {
    return function ($5) {
        return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(Web_Event_EventPhase.boundedEnumEventPhase)($foreign.eventPhaseIndex($5)));
    };
};
var eqEventType = Data_Eq.eqString;
var currentTarget = function ($6) {
    return Data_Nullable.toMaybe($foreign["_currentTarget"]($6));
};
module.exports = {
    EventType: EventType,
    target: target,
    currentTarget: currentTarget,
    eventPhase: eventPhase,
    newtypeEventType: newtypeEventType,
    eqEventType: eqEventType,
    ordEventType: ordEventType,
    type_: $foreign.type_,
    stopPropagation: $foreign.stopPropagation,
    stopImmediatePropagation: $foreign.stopImmediatePropagation,
    bubbles: $foreign.bubbles,
    cancelable: $foreign.cancelable,
    preventDefault: $foreign.preventDefault,
    defaultPrevented: $foreign.defaultPrevented,
    timeStamp: $foreign.timeStamp
};
