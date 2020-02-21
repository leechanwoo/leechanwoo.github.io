// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
module.exports = {
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toChildNode: toChildNode,
    toEventTarget: toEventTarget,
    name: $foreign.name,
    publicId: $foreign.publicId,
    systemId: $foreign.systemId
};
