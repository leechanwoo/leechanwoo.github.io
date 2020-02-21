// Generated by purs version 0.12.5
"use strict";
var Data_Array_NonEmpty = require("../Data.Array.NonEmpty/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_NonEmpty_Internal = require("../Data.String.NonEmpty.Internal/index.js");
var Data_String_Unsafe = require("../Data.String.Unsafe/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var toNonEmptyString = Unsafe_Coerce.unsafeCoerce;
var snoc = function (c) {
    return function (s) {
        return toNonEmptyString(s + Data_String_CodeUnits.singleton(c));
    };
};
var singleton = function ($13) {
    return toNonEmptyString(Data_String_CodeUnits.singleton($13));
};
var liftS = Unsafe_Coerce.unsafeCoerce;
var takeWhile = function (f) {
    return function ($14) {
        return Data_String_NonEmpty_Internal.fromString(liftS(Data_String_CodeUnits.takeWhile(f))($14));
    };
};
var lastIndexOf$prime = function (pat) {
    return function ($15) {
        return liftS(Data_String_CodeUnits["lastIndexOf'"](pat)($15));
    };
};
var lastIndexOf = function ($16) {
    return liftS(Data_String_CodeUnits.lastIndexOf($16));
};
var indexOf$prime = function (pat) {
    return function ($17) {
        return liftS(Data_String_CodeUnits["indexOf'"](pat)($17));
    };
};
var indexOf = function ($18) {
    return liftS(Data_String_CodeUnits.indexOf($18));
};
var fromNonEmptyString = Unsafe_Coerce.unsafeCoerce;
var length = function ($19) {
    return Data_String_CodeUnits.length(fromNonEmptyString($19));
};
var splitAt = function (i) {
    return function (nes) {
        var v = Data_String_CodeUnits.splitAt(i)(fromNonEmptyString(nes));
        return {
            before: Data_String_NonEmpty_Internal.fromString(v.before),
            after: Data_String_NonEmpty_Internal.fromString(v.after)
        };
    };
};
var take = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $8 = i < 1;
        if ($8) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.take(i)(s)));
    };
};
var takeRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $9 = i < 1;
        if ($9) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.takeRight(i)(s)));
    };
};
var toChar = function ($20) {
    return Data_String_CodeUnits.toChar(fromNonEmptyString($20));
};
var toCharArray = function ($21) {
    return Data_String_CodeUnits.toCharArray(fromNonEmptyString($21));
};
var toNonEmptyCharArray = function ($22) {
    return Data_Maybe.fromJust()(Data_Array_NonEmpty.fromArray(toCharArray($22)));
};
var uncons = function (nes) {
    var s = fromNonEmptyString(nes);
    return {
        head: Data_String_Unsafe.charAt(0)(s),
        tail: Data_String_NonEmpty_Internal.fromString(Data_String_CodeUnits.drop(1)(s))
    };
};
var fromFoldable1 = function (dictFoldable1) {
    return function ($23) {
        return Data_Semigroup_Foldable.fold1(dictFoldable1)(Data_String_NonEmpty_Internal.semigroupNonEmptyString)($23);
    };
};
var fromCharArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.fromCharArray(v)));
};
var fromNonEmptyCharArray = function ($24) {
    return Data_Maybe.fromJust()(fromCharArray(Data_Array_NonEmpty.toArray($24)));
};
var dropWhile = function (f) {
    return function ($25) {
        return Data_String_NonEmpty_Internal.fromString(liftS(Data_String_CodeUnits.dropWhile(f))($25));
    };
};
var dropRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $11 = i >= Data_String_CodeUnits.length(s);
        if ($11) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.dropRight(i)(s)));
    };
};
var drop = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $12 = i >= Data_String_CodeUnits.length(s);
        if ($12) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.drop(i)(s)));
    };
};
var countPrefix = function ($26) {
    return liftS(Data_String_CodeUnits.countPrefix($26));
};
var cons = function (c) {
    return function (s) {
        return toNonEmptyString(Data_String_CodeUnits.singleton(c) + s);
    };
};
var charAt = function ($27) {
    return liftS(Data_String_CodeUnits.charAt($27));
};
module.exports = {
    fromCharArray: fromCharArray,
    fromNonEmptyCharArray: fromNonEmptyCharArray,
    singleton: singleton,
    cons: cons,
    snoc: snoc,
    fromFoldable1: fromFoldable1,
    toCharArray: toCharArray,
    toNonEmptyCharArray: toNonEmptyCharArray,
    charAt: charAt,
    toChar: toChar,
    indexOf: indexOf,
    "indexOf'": indexOf$prime,
    lastIndexOf: lastIndexOf,
    "lastIndexOf'": lastIndexOf$prime,
    uncons: uncons,
    length: length,
    take: take,
    takeRight: takeRight,
    takeWhile: takeWhile,
    drop: drop,
    dropRight: dropRight,
    dropWhile: dropWhile,
    countPrefix: countPrefix,
    splitAt: splitAt
};
