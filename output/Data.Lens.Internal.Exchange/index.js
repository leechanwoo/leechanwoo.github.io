// Generated by purs version 0.12.5
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Exchange = (function () {
    function Exchange(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Exchange.create = function (value0) {
        return function (value1) {
            return new Exchange(value0, value1);
        };
    };
    return Exchange;
})();
var profunctorExchange = new Data_Profunctor.Profunctor(function (f) {
    return function (g) {
        return function (v) {
            return new Exchange(function ($11) {
                return v.value0(f($11));
            }, function ($12) {
                return g(v.value1($12));
            });
        };
    };
});
var functorExchange = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new Exchange(v.value0, function ($13) {
            return f(v.value1($13));
        });
    };
});
module.exports = {
    Exchange: Exchange,
    functorExchange: functorExchange,
    profunctorExchange: profunctorExchange
};
