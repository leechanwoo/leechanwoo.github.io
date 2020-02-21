// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var Pixel = (function () {
    function Pixel() {

    };
    Pixel.value = new Pixel();
    return Pixel;
})();
var Line = (function () {
    function Line() {

    };
    Line.value = new Line();
    return Line;
})();
var Page = (function () {
    function Page() {

    };
    Page.value = new Page();
    return Page;
})();
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toMouseEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var toEnumDeltaMode = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Pixel.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Line.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Page.value);
    };
    return Data_Maybe.Nothing.value;
};
var fromUIEvent = Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromMouseEvent = Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromEnumDeltaMode = function (v) {
    if (v instanceof Pixel) {
        return 0;
    };
    if (v instanceof Line) {
        return 1;
    };
    if (v instanceof Page) {
        return 2;
    };
    throw new Error("Failed pattern match at Web.UIEvent.WheelEvent (line 91, column 3 - line 94, column 13): " + [ v.constructor.name ]);
};
var eqDeltaMode = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Pixel && y instanceof Pixel) {
            return true;
        };
        if (x instanceof Line && y instanceof Line) {
            return true;
        };
        if (x instanceof Page && y instanceof Page) {
            return true;
        };
        return false;
    };
});
var ordDeltaMode = new Data_Ord.Ord(function () {
    return eqDeltaMode;
}, function (x) {
    return function (y) {
        if (x instanceof Pixel && y instanceof Pixel) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Pixel) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Pixel) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Line && y instanceof Line) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Line) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Line) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Page && y instanceof Page) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.UIEvent.WheelEvent (line 66, column 8 - line 66, column 46): " + [ x.constructor.name, y.constructor.name ]);
    };
});
var enumDeltaMode = new Data_Enum.Enum(function () {
    return ordDeltaMode;
}, Data_Enum.defaultPred(toEnumDeltaMode)(fromEnumDeltaMode), Data_Enum.defaultSucc(toEnumDeltaMode)(fromEnumDeltaMode));
var boundedDeltaMode = new Data_Bounded.Bounded(function () {
    return ordDeltaMode;
}, Pixel.value, Page.value);
var boundedEnumDeltaMode = new Data_Enum.BoundedEnum(function () {
    return boundedDeltaMode;
}, function () {
    return enumDeltaMode;
}, 3, fromEnumDeltaMode, toEnumDeltaMode);
var deltaMode = function (dictPartial) {
    return function ($13) {
        return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(boundedEnumDeltaMode)($foreign.deltaModeIndex($13)));
    };
};
module.exports = {
    fromMouseEvent: fromMouseEvent,
    fromUIEvent: fromUIEvent,
    fromEvent: fromEvent,
    toMouseEvent: toMouseEvent,
    toUIEvent: toUIEvent,
    toEvent: toEvent,
    deltaMode: deltaMode,
    Pixel: Pixel,
    Line: Line,
    Page: Page,
    toEnumDeltaMode: toEnumDeltaMode,
    fromEnumDeltaMode: fromEnumDeltaMode,
    eqDeltaMode: eqDeltaMode,
    ordDeltaMode: ordDeltaMode,
    boundedDeltaMode: boundedDeltaMode,
    enumDeltaMode: enumDeltaMode,
    boundedEnumDeltaMode: boundedEnumDeltaMode,
    deltaX: $foreign.deltaX,
    deltaY: $foreign.deltaY,
    deltaZ: $foreign.deltaZ,
    deltaModeIndex: $foreign.deltaModeIndex
};
