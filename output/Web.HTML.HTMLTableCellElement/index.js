// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableCellElement");
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    colSpan: $foreign.colSpan,
    setColSpan: $foreign.setColSpan,
    rowSpan: $foreign.rowSpan,
    setRowSpan: $foreign.setRowSpan,
    cellIndex: $foreign.cellIndex
};
