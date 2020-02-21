// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var getElementsByTagNameNS = function ($0) {
    return $foreign["_getElementsByTagNameNS"](Data_Nullable.toNullable($0));
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromNonElementParentNode = Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Document");
var documentElement = function ($1) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_documentElement"]($1));
};
var doctype = function ($2) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_doctype"]($2));
};
var createElementNS = function ($3) {
    return $foreign["_createElementNS"](Data_Nullable.toNullable($3));
};
module.exports = {
    fromNode: fromNode,
    fromParentNode: fromParentNode,
    fromNonElementParentNode: fromNonElementParentNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toParentNode: toParentNode,
    toNonElementParentNode: toNonElementParentNode,
    toEventTarget: toEventTarget,
    doctype: doctype,
    documentElement: documentElement,
    getElementsByTagNameNS: getElementsByTagNameNS,
    createElementNS: createElementNS,
    url: $foreign.url,
    documentURI: $foreign.documentURI,
    origin: $foreign.origin,
    compatMode: $foreign.compatMode,
    characterSet: $foreign.characterSet,
    contentType: $foreign.contentType,
    getElementsByTagName: $foreign.getElementsByTagName,
    getElementsByClassName: $foreign.getElementsByClassName,
    createElement: $foreign.createElement,
    createDocumentFragment: $foreign.createDocumentFragment,
    createTextNode: $foreign.createTextNode,
    createComment: $foreign.createComment,
    createProcessingInstruction: $foreign.createProcessingInstruction,
    importNode: $foreign.importNode,
    adoptNode: $foreign.adoptNode
};
