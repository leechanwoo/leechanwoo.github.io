// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var modify = function (f) {
    return $foreign["modify'"](function (s) {
        var s$prime = f(s);
        return {
            state: s$prime,
            value: s$prime
        };
    });
};
var functorST = new Data_Functor.Functor($foreign.map_);
var monadST = new Control_Monad.Monad(function () {
    return applicativeST;
}, function () {
    return bindST;
});
var bindST = new Control_Bind.Bind(function () {
    return applyST;
}, $foreign.bind_);
var applyST = new Control_Apply.Apply(function () {
    return functorST;
}, Control_Monad.ap(monadST));
var applicativeST = new Control_Applicative.Applicative(function () {
    return applyST;
}, $foreign.pure_);
var monadRecST = new Control_Monad_Rec_Class.MonadRec(function () {
    return monadST;
}, function (f) {
    return function (a) {
        var isLooping = function (v) {
            if (v instanceof Control_Monad_Rec_Class.Loop) {
                return true;
            };
            return false;
        };
        var fromDone = function (v) {
            if (v instanceof Control_Monad_Rec_Class.Done) {
                return v.value0;
            };
            throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 54, column 32 - line 54, column 46): " + [ v.constructor.name ]);
        };
        return Control_Bind.bind(bindST)(Control_Bind.bindFlipped(bindST)($foreign["new"])(f(a)))(function (v) {
            return Control_Bind.discard(Control_Bind.discardUnit)(bindST)($foreign["while"](Data_Functor.map(functorST)(isLooping)($foreign.read(v)))(Control_Bind.bind(bindST)($foreign.read(v))(function (v1) {
                if (v1 instanceof Control_Monad_Rec_Class.Loop) {
                    return Control_Bind.bind(bindST)(f(v1.value0))(function (v2) {
                        return Data_Functor["void"](functorST)($foreign.write(v2)(v));
                    });
                };
                if (v1 instanceof Control_Monad_Rec_Class.Done) {
                    return Control_Applicative.pure(applicativeST)(Data_Unit.unit);
                };
                throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 46, column 18 - line 50, column 28): " + [ v1.constructor.name ]);
            })))(function () {
                return Data_Functor.map(functorST)(fromDone)($foreign.read(v));
            });
        });
    };
});
module.exports = {
    modify: modify,
    functorST: functorST,
    applyST: applyST,
    applicativeST: applicativeST,
    bindST: bindST,
    monadST: monadST,
    monadRecST: monadRecST,
    map_: $foreign.map_,
    pure_: $foreign.pure_,
    bind_: $foreign.bind_,
    run: $foreign.run,
    "while": $foreign["while"],
    "for": $foreign["for"],
    foreach: $foreign.foreach,
    "new": $foreign["new"],
    read: $foreign.read,
    "modify'": $foreign["modify'"],
    write: $foreign.write
};
