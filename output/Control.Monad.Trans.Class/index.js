// Generated by purs version 0.12.5
"use strict";
var MonadTrans = function (lift) {
    this.lift = lift;
};
var lift = function (dict) {
    return dict.lift;
};
module.exports = {
    lift: lift,
    MonadTrans: MonadTrans
};
