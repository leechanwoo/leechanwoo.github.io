// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_HTML_HTMLDocument_ReadyState = require("../Web.HTML.HTMLDocument.ReadyState/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toDocument = Unsafe_Coerce.unsafeCoerce;
var readyState = function ($0) {
    return Data_Functor.map(Effect.functorEffect)(function ($1) {
        return Data_Maybe.fromMaybe(Web_HTML_HTMLDocument_ReadyState.Loading.value)(Web_HTML_HTMLDocument_ReadyState.parse($1));
    })($foreign["_readyState"]($0));
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNonElementParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromDocument = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var currentScript = function ($2) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_currentScript"]($2));
};
var body = function ($3) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_body"]($3));
};
var activeElement = function ($4) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_activeElement"]($4));
};
module.exports = {
    fromDocument: fromDocument,
    fromNode: fromNode,
    fromParentNode: fromParentNode,
    fromNonElementParentNode: fromNonElementParentNode,
    fromEventTarget: fromEventTarget,
    toDocument: toDocument,
    toNode: toNode,
    toParentNode: toParentNode,
    toNonElementParentNode: toNonElementParentNode,
    toEventTarget: toEventTarget,
    body: body,
    readyState: readyState,
    activeElement: activeElement,
    currentScript: currentScript,
    referrer: $foreign.referrer,
    title: $foreign.title,
    setTitle: $foreign.setTitle
};
