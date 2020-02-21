// Generated by purs version 0.12.5
"use strict";
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Comonad_Env_Trans = require("../Control.Comonad.Env.Trans/index.js");
var Control_Comonad_Store_Trans = require("../Control.Comonad.Store.Trans/index.js");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans/index.js");
var Control_Comonad_Trans_Class = require("../Control.Comonad.Trans.Class/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var ComonadStore = function (Comonad0, peek, pos) {
    this.Comonad0 = Comonad0;
    this.peek = peek;
    this.pos = pos;
};
var pos = function (dict) {
    return dict.pos;
};
var peek = function (dict) {
    return dict.peek;
};
var peeks = function (dictComonadStore) {
    return function (f) {
        return function (x) {
            return peek(dictComonadStore)(f(pos(dictComonadStore)(x)))(x);
        };
    };
};
var seeks = function (dictComonadStore) {
    return function (f) {
        return function ($18) {
            return peeks(dictComonadStore)(f)(Control_Extend.duplicate((dictComonadStore.Comonad0()).Extend0())($18));
        };
    };
};
var seek = function (dictComonadStore) {
    return function (s) {
        return function ($19) {
            return peek(dictComonadStore)(s)(Control_Extend.duplicate((dictComonadStore.Comonad0()).Extend0())($19));
        };
    };
};
var experiment = function (dictComonadStore) {
    return function (dictFunctor) {
        return function (f) {
            return function (x) {
                return Data_Functor.map(dictFunctor)(Data_Function.flip(peek(dictComonadStore))(x))(f(pos(dictComonadStore)(x)));
            };
        };
    };
};
var comonadStoreTracedT = function (dictComonadStore) {
    return function (dictMonoid) {
        return new ComonadStore(function () {
            return Control_Comonad_Traced_Trans.comonadTracedT(dictComonadStore.Comonad0())(dictMonoid);
        }, function (s) {
            return function ($20) {
                return peek(dictComonadStore)(s)(Control_Comonad_Trans_Class.lower(Control_Comonad_Traced_Trans.comonadTransTracedT(dictMonoid))(dictComonadStore.Comonad0())($20));
            };
        }, function ($21) {
            return pos(dictComonadStore)(Control_Comonad_Trans_Class.lower(Control_Comonad_Traced_Trans.comonadTransTracedT(dictMonoid))(dictComonadStore.Comonad0())($21));
        });
    };
};
var comonadStoreStoreT = function (dictComonad) {
    return new ComonadStore(function () {
        return Control_Comonad_Store_Trans.comonadStoreT(dictComonad);
    }, function (s) {
        return function (v) {
            return Control_Comonad.extract(dictComonad)(v.value0)(s);
        };
    }, function (v) {
        return v.value1;
    });
};
var comonadStoreEnvT = function (dictComonadStore) {
    return new ComonadStore(function () {
        return Control_Comonad_Env_Trans.comonadEnvT(dictComonadStore.Comonad0());
    }, function (s) {
        return function ($22) {
            return peek(dictComonadStore)(s)(Control_Comonad_Trans_Class.lower(Control_Comonad_Env_Trans.comonadTransEnvT)(dictComonadStore.Comonad0())($22));
        };
    }, function ($23) {
        return pos(dictComonadStore)(Control_Comonad_Trans_Class.lower(Control_Comonad_Env_Trans.comonadTransEnvT)(dictComonadStore.Comonad0())($23));
    });
};
module.exports = {
    peek: peek,
    pos: pos,
    ComonadStore: ComonadStore,
    experiment: experiment,
    peeks: peeks,
    seek: seek,
    seeks: seeks,
    comonadStoreStoreT: comonadStoreStoreT,
    comonadStoreEnvT: comonadStoreEnvT,
    comonadStoreTracedT: comonadStoreTracedT
};
