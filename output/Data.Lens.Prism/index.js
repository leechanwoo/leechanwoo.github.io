// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Lens_Internal_Market = require("../Data.Lens.Internal.Market/index.js");
var Data_Lens_Internal_Tagged = require("../Data.Lens.Internal.Tagged/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var withPrism = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Market.Market(Control_Category.identity(Control_Category.categoryFn), Data_Either.Right.create));
        return f(v.value0)(v.value1);
    };
};
var review = Data_Newtype.under(Data_Lens_Internal_Tagged.newtypeTagged)(Data_Lens_Internal_Tagged.newtypeTagged)(Data_Lens_Internal_Tagged.Tagged);
var prism = function (to) {
    return function (fro) {
        return function (dictChoice) {
            return function (pab) {
                return Data_Profunctor.dimap(dictChoice.Profunctor0())(fro)(Data_Either.either(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn)))(Data_Profunctor_Choice.right(dictChoice)(Data_Profunctor.rmap(dictChoice.Profunctor0())(to)(pab)));
            };
        };
    };
};
var prism$prime = function (to) {
    return function (fro) {
        return function (dictChoice) {
            return prism(to)(function (s) {
                return Data_Maybe.maybe(new Data_Either.Left(s))(Data_Either.Right.create)(fro(s));
            })(dictChoice);
        };
    };
};
var nearly = function (x) {
    return function (f) {
        return function (dictChoice) {
            return prism$prime(Data_Function["const"](x))(function ($14) {
                return Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(f($14));
            })(dictChoice);
        };
    };
};
var only = function (dictEq) {
    return function (x) {
        return function (dictChoice) {
            return nearly(x)(function (v) {
                return Data_Eq.eq(dictEq)(v)(x);
            })(dictChoice);
        };
    };
};
var matching = function (l) {
    return withPrism(l)(function (v) {
        return function (f) {
            return f;
        };
    });
};
var is = function (dictHeytingAlgebra) {
    return function (l) {
        return function ($15) {
            return Data_Either.either(Data_Function["const"](Data_HeytingAlgebra.ff(dictHeytingAlgebra)))(Data_Function["const"](Data_HeytingAlgebra.tt(dictHeytingAlgebra)))(matching(l)($15));
        };
    };
};
var isn$primet = function (dictHeytingAlgebra) {
    return function (l) {
        return function ($16) {
            return Data_HeytingAlgebra.not(dictHeytingAlgebra)(is(dictHeytingAlgebra)(l)($16));
        };
    };
};
var clonePrism = function (l) {
    return function (dictChoice) {
        return withPrism(l)(function (x) {
            return function (y) {
                return function (p) {
                    return prism(x)(y)(dictChoice)(p);
                };
            };
        });
    };
};
module.exports = {
    "prism'": prism$prime,
    prism: prism,
    only: only,
    nearly: nearly,
    review: review,
    is: is,
    "isn't": isn$primet,
    matching: matching,
    clonePrism: clonePrism,
    withPrism: withPrism
};
