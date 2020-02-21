// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Strong = function (Profunctor0, first, second) {
    this.Profunctor0 = Profunctor0;
    this.first = first;
    this.second = second;
};
var strongFn = new Strong(function () {
    return Data_Profunctor.profunctorFn;
}, function (a2b) {
    return function (v) {
        return new Data_Tuple.Tuple(a2b(v.value0), v.value1);
    };
}, Data_Functor.map(Data_Tuple.functorTuple));
var second = function (dict) {
    return dict.second;
};
var first = function (dict) {
    return dict.first;
};
var splitStrong = function (dictCategory) {
    return function (dictStrong) {
        return function (l) {
            return function (r) {
                return Control_Semigroupoid.composeFlipped(dictCategory.Semigroupoid0())(first(dictStrong)(l))(second(dictStrong)(r));
            };
        };
    };
};
var fanout = function (dictCategory) {
    return function (dictStrong) {
        return function (l) {
            return function (r) {
                var split = Data_Profunctor.dimap(dictStrong.Profunctor0())(Control_Category.identity(Control_Category.categoryFn))(function (a) {
                    return new Data_Tuple.Tuple(a, a);
                })(Control_Category.identity(dictCategory));
                return Control_Semigroupoid.composeFlipped(dictCategory.Semigroupoid0())(split)(splitStrong(dictCategory)(dictStrong)(l)(r));
            };
        };
    };
};
module.exports = {
    first: first,
    second: second,
    Strong: Strong,
    splitStrong: splitStrong,
    fanout: fanout,
    strongFn: strongFn
};
