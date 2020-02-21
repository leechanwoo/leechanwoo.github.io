// Generated by purs version 0.12.5
"use strict";
var Data_Const = require("../Data.Const/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lens_Internal_Wander = require("../Data.Lens.Internal.Wander/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Profunctor_Cochoice = require("../Data.Profunctor.Cochoice/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Forget = function (x) {
    return x;
};
var semigroupForget = function (dictSemigroup) {
    return Data_Semigroup.semigroupFn(dictSemigroup);
};
var profunctorForget = new Data_Profunctor.Profunctor(function (f) {
    return function (v) {
        return function (v1) {
            return function ($27) {
                return v1(f($27));
            };
        };
    };
});
var strongForget = new Data_Profunctor_Strong.Strong(function () {
    return profunctorForget;
}, function (v) {
    return function ($28) {
        return v(Data_Tuple.fst($28));
    };
}, function (v) {
    return function ($29) {
        return v(Data_Tuple.snd($29));
    };
});
var newtypeForget = new Data_Newtype.Newtype(function (n) {
    return n;
}, Forget);
var monoidForget = function (dictMonoid) {
    return Data_Monoid.monoidFn(dictMonoid);
};
var cochoiceForget = new Data_Profunctor_Cochoice.Cochoice(function () {
    return profunctorForget;
}, function (v) {
    return function ($30) {
        return v(Data_Either.Left.create($30));
    };
}, function (v) {
    return function ($31) {
        return v(Data_Either.Right.create($31));
    };
});
var choiceForget = function (dictMonoid) {
    return new Data_Profunctor_Choice.Choice(function () {
        return profunctorForget;
    }, function (v) {
        return Data_Either.either(v)(Data_Monoid.mempty(Data_Monoid.monoidFn(dictMonoid)));
    }, function (v) {
        return Data_Either.either(Data_Monoid.mempty(Data_Monoid.monoidFn(dictMonoid)))(v);
    });
};
var wanderForget = function (dictMonoid) {
    return new Data_Lens_Internal_Wander.Wander(function () {
        return choiceForget(dictMonoid);
    }, function () {
        return strongForget;
    }, function (f) {
        return function (v) {
            return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Const.newtypeConst)(Data_Const.newtypeConst)(Data_Const.Const)(f(Data_Const.applicativeConst(dictMonoid)))(v);
        };
    });
};
module.exports = {
    Forget: Forget,
    newtypeForget: newtypeForget,
    semigroupForget: semigroupForget,
    monoidForget: monoidForget,
    profunctorForget: profunctorForget,
    choiceForget: choiceForget,
    strongForget: strongForget,
    cochoiceForget: cochoiceForget,
    wanderForget: wanderForget
};
