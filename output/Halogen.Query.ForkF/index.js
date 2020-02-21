// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var ForkF = (function () {
    function ForkF(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ForkF.create = function (value0) {
        return function (value1) {
            return new ForkF(value0, value1);
        };
    };
    return ForkF;
})();
var unFork = Unsafe_Coerce.unsafeCoerce;
var mkFork = Unsafe_Coerce.unsafeCoerce;
var hoistFork = function (nat) {
    return unFork(function (v) {
        return mkFork(new ForkF(nat(v.value0), v.value1));
    });
};
var functorFork = new Data_Functor.Functor(function (f) {
    return unFork(function (v) {
        return mkFork(new ForkF(v.value0, Data_Functor.map(Data_Functor.functorFn)(f)(v.value1)));
    });
});
var fork = function (fx) {
    return mkFork(new ForkF(fx, Control_Category.identity(Control_Category.categoryFn)));
};
module.exports = {
    ForkF: ForkF,
    fork: fork,
    mkFork: mkFork,
    unFork: unFork,
    hoistFork: hoistFork,
    functorFork: functorFork
};
