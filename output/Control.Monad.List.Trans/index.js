// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Yield = (function () {
    function Yield(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Yield.create = function (value0) {
        return function (value1) {
            return new Yield(value0, value1);
        };
    };
    return Yield;
})();
var Skip = (function () {
    function Skip(value0) {
        this.value0 = value0;
    };
    Skip.create = function (value0) {
        return new Skip(value0);
    };
    return Skip;
})();
var Done = (function () {
    function Done() {

    };
    Done.value = new Done();
    return Done;
})();
var ListT = function (x) {
    return x;
};
var wrapLazy = function (dictApplicative) {
    return function (v) {
        return ListT(Control_Applicative.pure(dictApplicative)(new Skip(v)));
    };
};
var wrapEffect = function (dictFunctor) {
    return function (v) {
        return ListT(Data_Functor.map(dictFunctor)(function ($187) {
            return Skip.create(Data_Lazy.defer(Data_Function["const"]($187)));
        })(v));
    };
};
var unfold = function (dictMonad) {
    return function (f) {
        return function (z) {
            var g = function (v) {
                if (v instanceof Data_Maybe.Just) {
                    return new Yield(v.value0.value1, Data_Lazy.defer(function (v1) {
                        return unfold(dictMonad)(f)(v.value0.value0);
                    }));
                };
                if (v instanceof Data_Maybe.Nothing) {
                    return Done.value;
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 130, column 3 - line 130, column 60): " + [ v.constructor.name ]);
            };
            return ListT(Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(g)(f(z)));
        };
    };
};
var uncons = function (dictMonad) {
    return function (v) {
        var g = function (v1) {
            if (v1 instanceof Yield) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_Maybe.Just.create(new Data_Tuple.Tuple(v1.value0, Data_Lazy.force(v1.value1))));
            };
            if (v1 instanceof Skip) {
                return uncons(dictMonad)(Data_Lazy.force(v1.value0));
            };
            if (v1 instanceof Done) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_Maybe.Nothing.value);
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 195, column 3 - line 195, column 50): " + [ v1.constructor.name ]);
        };
        return Control_Bind.bind(dictMonad.Bind1())(v)(g);
    };
};
var tail = function (dictMonad) {
    return function (l) {
        return Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Tuple.snd))(uncons(dictMonad)(l));
    };
};
var stepMap = function (dictFunctor) {
    return function (f) {
        return function (v) {
            return ListT(Data_Functor.map(dictFunctor)(f)(v));
        };
    };
};
var takeWhile = function (dictApplicative) {
    return function (f) {
        var g = function (v) {
            if (v instanceof Yield) {
                var $101 = f(v.value0);
                if ($101) {
                    return new Yield(v.value0, Data_Functor.map(Data_Lazy.functorLazy)(takeWhile(dictApplicative)(f))(v.value1));
                };
                return Done.value;
            };
            if (v instanceof Skip) {
                return Skip.create(Data_Functor.map(Data_Lazy.functorLazy)(takeWhile(dictApplicative)(f))(v.value0));
            };
            if (v instanceof Done) {
                return Done.value;
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 154, column 3 - line 154, column 68): " + [ v.constructor.name ]);
        };
        return stepMap((dictApplicative.Apply0()).Functor0())(g);
    };
};
var scanl = function (dictMonad) {
    return function (f) {
        return function (b) {
            return function (l) {
                var g = function (v) {
                    var h = function (v1) {
                        if (v1 instanceof Yield) {
                            var b$prime$prime = f(v.value0)(v1.value0);
                            return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(b$prime$prime, Data_Lazy.force(v1.value1)), v.value0));
                        };
                        if (v1 instanceof Skip) {
                            return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0, Data_Lazy.force(v1.value0)), v.value0));
                        };
                        if (v1 instanceof Done) {
                            return Data_Maybe.Nothing.value;
                        };
                        throw new Error("Failed pattern match at Control.Monad.List.Trans (line 248, column 5 - line 248, column 78): " + [ v1.constructor.name ]);
                    };
                    return Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(h)(v.value1);
                };
                return unfold(dictMonad)(g)(new Data_Tuple.Tuple(b, l));
            };
        };
    };
};
var prepend$prime = function (dictApplicative) {
    return function (h) {
        return function (t) {
            return ListT(Control_Applicative.pure(dictApplicative)(new Yield(h, t)));
        };
    };
};
var prepend = function (dictApplicative) {
    return function (h) {
        return function (t) {
            return prepend$prime(dictApplicative)(h)(Data_Lazy.defer(Data_Function["const"](t)));
        };
    };
};
var nil = function (dictApplicative) {
    return ListT(Control_Applicative.pure(dictApplicative)(Done.value));
};
var singleton = function (dictApplicative) {
    return function (a) {
        return prepend(dictApplicative)(a)(nil(dictApplicative));
    };
};
var take = function (dictApplicative) {
    return function (v) {
        return function (fa) {
            if (v === 0) {
                return nil(dictApplicative);
            };
            var f = function (v1) {
                if (v1 instanceof Yield) {
                    return new Yield(v1.value0, Data_Functor.map(Data_Lazy.functorLazy)(take(dictApplicative)(v - 1 | 0))(v1.value1));
                };
                if (v1 instanceof Skip) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(take(dictApplicative)(v))(v1.value0));
                };
                if (v1 instanceof Done) {
                    return Done.value;
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 147, column 3 - line 147, column 47): " + [ v1.constructor.name ]);
            };
            return stepMap((dictApplicative.Apply0()).Functor0())(f)(fa);
        };
    };
};
var zipWith$prime = function (dictMonad) {
    return function (f) {
        var g = function (v) {
            return function (v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(nil(dictMonad.Applicative0()));
                };
                if (v instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(nil(dictMonad.Applicative0()));
                };
                if (v instanceof Data_Maybe.Just && v1 instanceof Data_Maybe.Just) {
                    return Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(Data_Function.flip(prepend$prime(dictMonad.Applicative0()))(Data_Lazy.defer(function (v2) {
                        return zipWith$prime(dictMonad)(f)(v.value0.value1)(v1.value0.value1);
                    })))(f(v.value0.value0)(v1.value0.value0));
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 260, column 3 - line 260, column 25): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        var loop = function (fa) {
            return function (fb) {
                return wrapEffect(((dictMonad.Bind1()).Apply0()).Functor0())(Control_Bind.bind(dictMonad.Bind1())(uncons(dictMonad)(fa))(function (v) {
                    return Control_Bind.bind(dictMonad.Bind1())(uncons(dictMonad)(fb))(function (v1) {
                        return g(v)(v1);
                    });
                }));
            };
        };
        return loop;
    };
};
var zipWith = function (dictMonad) {
    return function (f) {
        var g = function (a) {
            return function (b) {
                return Control_Applicative.pure(dictMonad.Applicative0())(f(a)(b));
            };
        };
        return zipWith$prime(dictMonad)(g);
    };
};
var newtypeListT = new Data_Newtype.Newtype(function (n) {
    return n;
}, ListT);
var mapMaybe = function (dictFunctor) {
    return function (f) {
        var g = function (v) {
            if (v instanceof Yield) {
                return Data_Maybe.fromMaybe(Skip.create)(Data_Functor.map(Data_Maybe.functorMaybe)(Yield.create)(f(v.value0)))(Data_Functor.map(Data_Lazy.functorLazy)(mapMaybe(dictFunctor)(f))(v.value1));
            };
            if (v instanceof Skip) {
                return Skip.create(Data_Functor.map(Data_Lazy.functorLazy)(mapMaybe(dictFunctor)(f))(v.value0));
            };
            if (v instanceof Done) {
                return Done.value;
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 183, column 3 - line 183, column 72): " + [ v.constructor.name ]);
        };
        return stepMap(dictFunctor)(g);
    };
};
var iterate = function (dictMonad) {
    return function (f) {
        return function (a) {
            var g = function (x) {
                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Maybe.Just(new Data_Tuple.Tuple(f(x), x)));
            };
            return unfold(dictMonad)(g)(a);
        };
    };
};
var repeat = function (dictMonad) {
    return iterate(dictMonad)(Control_Category.identity(Control_Category.categoryFn));
};
var head = function (dictMonad) {
    return function (l) {
        return Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Tuple.fst))(uncons(dictMonad)(l));
    };
};
var functorListT = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        var g = function (v) {
            if (v instanceof Yield) {
                return new Yield(f(v.value0), Data_Functor.map(Data_Lazy.functorLazy)(Data_Functor.map(functorListT(dictFunctor))(f))(v.value1));
            };
            if (v instanceof Skip) {
                return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(Data_Functor.map(functorListT(dictFunctor))(f))(v.value0));
            };
            if (v instanceof Done) {
                return Done.value;
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 280, column 5 - line 280, column 48): " + [ v.constructor.name ]);
        };
        return stepMap(dictFunctor)(g);
    });
};
var fromEffect = function (dictApplicative) {
    return function (fa) {
        return ListT(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Function.flip(Yield.create)(Data_Lazy.defer(function (v) {
            return nil(dictApplicative);
        })))(fa));
    };
};
var monadTransListT = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return fromEffect(dictMonad.Applicative0());
});
var foldlRec$prime = function (dictMonadRec) {
    return function (f) {
        var loop = function (b) {
            return function (l) {
                var g = function (v) {
                    if (v instanceof Data_Maybe.Nothing) {
                        return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Done(b));
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(f(b)(v.value0.value0))(function (b$prime) {
                            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Loop({
                                a: b$prime,
                                b: v.value0.value1
                            }));
                        });
                    };
                    throw new Error("Failed pattern match at Control.Monad.List.Trans (line 221, column 5 - line 221, column 45): " + [ v.constructor.name ]);
                };
                return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(uncons(dictMonadRec.Monad0())(l))(g);
            };
        };
        return Control_Monad_Rec_Class.tailRecM2(dictMonadRec)(loop);
    };
};
var runListTRec = function (dictMonadRec) {
    return foldlRec$prime(dictMonadRec)(function (v) {
        return function (v1) {
            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(Data_Unit.unit);
        };
    })(Data_Unit.unit);
};
var foldlRec = function (dictMonadRec) {
    return function (f) {
        var loop = function (b) {
            return function (l) {
                var g = function (v) {
                    if (v instanceof Data_Maybe.Nothing) {
                        return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Done(b));
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Loop({
                            a: f(b)(v.value0.value0),
                            b: v.value0.value1
                        }));
                    };
                    throw new Error("Failed pattern match at Control.Monad.List.Trans (line 239, column 7 - line 239, column 47): " + [ v.constructor.name ]);
                };
                return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(uncons(dictMonadRec.Monad0())(l))(g);
            };
        };
        return Control_Monad_Rec_Class.tailRecM2(dictMonadRec)(loop);
    };
};
var foldl$prime = function (dictMonad) {
    return function (f) {
        var loop = function (b) {
            return function (l) {
                var g = function (v) {
                    if (v instanceof Data_Maybe.Nothing) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(b);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return Control_Bind.bind(dictMonad.Bind1())(f(b)(v.value0.value0))(Data_Function.flip(loop)(v.value0.value1));
                    };
                    throw new Error("Failed pattern match at Control.Monad.List.Trans (line 212, column 5 - line 212, column 35): " + [ v.constructor.name ]);
                };
                return Control_Bind.bind(dictMonad.Bind1())(uncons(dictMonad)(l))(g);
            };
        };
        return loop;
    };
};
var runListT = function (dictMonad) {
    return foldl$prime(dictMonad)(function (v) {
        return function (v1) {
            return Control_Applicative.pure(dictMonad.Applicative0())(Data_Unit.unit);
        };
    })(Data_Unit.unit);
};
var foldl = function (dictMonad) {
    return function (f) {
        var loop = function (b) {
            return function (l) {
                var g = function (v) {
                    if (v instanceof Data_Maybe.Nothing) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(b);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return loop(f(b)(v.value0.value0))(v.value0.value1);
                    };
                    throw new Error("Failed pattern match at Control.Monad.List.Trans (line 229, column 5 - line 229, column 35): " + [ v.constructor.name ]);
                };
                return Control_Bind.bind(dictMonad.Bind1())(uncons(dictMonad)(l))(g);
            };
        };
        return loop;
    };
};
var filter = function (dictFunctor) {
    return function (f) {
        var g = function (v) {
            if (v instanceof Yield) {
                var s$prime = Data_Functor.map(Data_Lazy.functorLazy)(filter(dictFunctor)(f))(v.value1);
                var $154 = f(v.value0);
                if ($154) {
                    return new Yield(v.value0, s$prime);
                };
                return new Skip(s$prime);
            };
            if (v instanceof Skip) {
                var s$prime = Data_Functor.map(Data_Lazy.functorLazy)(filter(dictFunctor)(f))(v.value0);
                return new Skip(s$prime);
            };
            if (v instanceof Done) {
                return Done.value;
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 176, column 3 - line 176, column 80): " + [ v.constructor.name ]);
        };
        return stepMap(dictFunctor)(g);
    };
};
var dropWhile = function (dictApplicative) {
    return function (f) {
        var g = function (v) {
            if (v instanceof Yield) {
                var $159 = f(v.value0);
                if ($159) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(dropWhile(dictApplicative)(f))(v.value1));
                };
                return new Yield(v.value0, v.value1);
            };
            if (v instanceof Skip) {
                return Skip.create(Data_Functor.map(Data_Lazy.functorLazy)(dropWhile(dictApplicative)(f))(v.value0));
            };
            if (v instanceof Done) {
                return Done.value;
            };
            throw new Error("Failed pattern match at Control.Monad.List.Trans (line 169, column 3 - line 169, column 70): " + [ v.constructor.name ]);
        };
        return stepMap((dictApplicative.Apply0()).Functor0())(g);
    };
};
var drop = function (dictApplicative) {
    return function (v) {
        return function (fa) {
            if (v === 0) {
                return fa;
            };
            var f = function (v1) {
                if (v1 instanceof Yield) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(drop(dictApplicative)(v - 1 | 0))(v1.value1));
                };
                if (v1 instanceof Skip) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(drop(dictApplicative)(v))(v1.value0));
                };
                if (v1 instanceof Done) {
                    return Done.value;
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 162, column 3 - line 162, column 44): " + [ v1.constructor.name ]);
            };
            return stepMap((dictApplicative.Apply0()).Functor0())(f)(fa);
        };
    };
};
var cons = function (dictApplicative) {
    return function (lh) {
        return function (t) {
            return ListT(Control_Applicative.pure(dictApplicative)(new Yield(Data_Lazy.force(lh), t)));
        };
    };
};
var unfoldable1ListT = function (dictMonad) {
    return new Data_Unfoldable1.Unfoldable1(function (f) {
        return function (b) {
            var go = function (v) {
                if (v.value1 instanceof Data_Maybe.Nothing) {
                    return singleton(dictMonad.Applicative0())(v.value0);
                };
                if (v.value1 instanceof Data_Maybe.Just) {
                    return cons(dictMonad.Applicative0())(Control_Applicative.pure(Data_Lazy.applicativeLazy)(v.value0))(Data_Lazy.defer(function (v1) {
                        return go(f(v.value1.value0));
                    }));
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 294, column 12 - line 296, column 67): " + [ v.constructor.name ]);
            };
            return go(f(b));
        };
    });
};
var unfoldableListT = function (dictMonad) {
    return new Data_Unfoldable.Unfoldable(function () {
        return unfoldable1ListT(dictMonad);
    }, function (f) {
        return function (b) {
            var go = function (v) {
                if (v instanceof Data_Maybe.Nothing) {
                    return nil(dictMonad.Applicative0());
                };
                if (v instanceof Data_Maybe.Just) {
                    return cons(dictMonad.Applicative0())(Control_Applicative.pure(Data_Lazy.applicativeLazy)(v.value0.value0))(Data_Lazy.defer(function (v1) {
                        return go(f(v.value0.value1));
                    }));
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 287, column 12 - line 289, column 67): " + [ v.constructor.name ]);
            };
            return go(f(b));
        };
    });
};
var semigroupListT = function (dictApplicative) {
    return new Data_Semigroup.Semigroup(concat(dictApplicative));
};
var concat = function (dictApplicative) {
    return function (x) {
        return function (y) {
            var f = function (v) {
                if (v instanceof Yield) {
                    return new Yield(v.value0, Data_Functor.map(Data_Lazy.functorLazy)(function (v1) {
                        return Data_Semigroup.append(semigroupListT(dictApplicative))(v1)(y);
                    })(v.value1));
                };
                if (v instanceof Skip) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(function (v1) {
                        return Data_Semigroup.append(semigroupListT(dictApplicative))(v1)(y);
                    })(v.value0));
                };
                if (v instanceof Done) {
                    return new Skip(Data_Lazy.defer(Data_Function["const"](y)));
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 106, column 3 - line 106, column 43): " + [ v.constructor.name ]);
            };
            return stepMap((dictApplicative.Apply0()).Functor0())(f)(x);
        };
    };
};
var monoidListT = function (dictApplicative) {
    return new Data_Monoid.Monoid(function () {
        return semigroupListT(dictApplicative);
    }, nil(dictApplicative));
};
var catMaybes = function (dictFunctor) {
    return mapMaybe(dictFunctor)(Control_Category.identity(Control_Category.categoryFn));
};
var monadListT = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeListT(dictMonad);
    }, function () {
        return bindListT(dictMonad);
    });
};
var bindListT = function (dictMonad) {
    return new Control_Bind.Bind(function () {
        return applyListT(dictMonad);
    }, function (fa) {
        return function (f) {
            var g = function (v) {
                if (v instanceof Yield) {
                    var h = function (s$prime) {
                        return Data_Semigroup.append(semigroupListT(dictMonad.Applicative0()))(f(v.value0))(Control_Bind.bind(bindListT(dictMonad))(s$prime)(f));
                    };
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(h)(v.value1));
                };
                if (v instanceof Skip) {
                    return new Skip(Data_Functor.map(Data_Lazy.functorLazy)(function (v1) {
                        return Control_Bind.bind(bindListT(dictMonad))(v1)(f);
                    })(v.value0));
                };
                if (v instanceof Done) {
                    return Done.value;
                };
                throw new Error("Failed pattern match at Control.Monad.List.Trans (line 306, column 5 - line 308, column 31): " + [ v.constructor.name ]);
            };
            return stepMap(((dictMonad.Bind1()).Apply0()).Functor0())(g)(fa);
        };
    });
};
var applyListT = function (dictMonad) {
    return new Control_Apply.Apply(function () {
        return functorListT(((dictMonad.Bind1()).Apply0()).Functor0());
    }, Control_Monad.ap(monadListT(dictMonad)));
};
var applicativeListT = function (dictMonad) {
    return new Control_Applicative.Applicative(function () {
        return applyListT(dictMonad);
    }, singleton(dictMonad.Applicative0()));
};
var monadEffectListT = function (dictMonadEffect) {
    return new Effect_Class.MonadEffect(function () {
        return monadListT(dictMonadEffect.Monad0());
    }, function ($188) {
        return Control_Monad_Trans_Class.lift(monadTransListT)(dictMonadEffect.Monad0())(Effect_Class.liftEffect(dictMonadEffect)($188));
    });
};
var altListT = function (dictApplicative) {
    return new Control_Alt.Alt(function () {
        return functorListT((dictApplicative.Apply0()).Functor0());
    }, concat(dictApplicative));
};
var plusListT = function (dictMonad) {
    return new Control_Plus.Plus(function () {
        return altListT(dictMonad.Applicative0());
    }, nil(dictMonad.Applicative0()));
};
var alternativeListT = function (dictMonad) {
    return new Control_Alternative.Alternative(function () {
        return applicativeListT(dictMonad);
    }, function () {
        return plusListT(dictMonad);
    });
};
var monadZeroListT = function (dictMonad) {
    return new Control_MonadZero.MonadZero(function () {
        return alternativeListT(dictMonad);
    }, function () {
        return monadListT(dictMonad);
    });
};
var monadPlusListT = function (dictMonad) {
    return new Control_MonadPlus.MonadPlus(function () {
        return monadZeroListT(dictMonad);
    });
};
module.exports = {
    ListT: ListT,
    Yield: Yield,
    Skip: Skip,
    Done: Done,
    catMaybes: catMaybes,
    cons: cons,
    drop: drop,
    dropWhile: dropWhile,
    filter: filter,
    foldl: foldl,
    foldlRec: foldlRec,
    "foldl'": foldl$prime,
    "foldlRec'": foldlRec$prime,
    fromEffect: fromEffect,
    head: head,
    iterate: iterate,
    mapMaybe: mapMaybe,
    nil: nil,
    prepend: prepend,
    "prepend'": prepend$prime,
    repeat: repeat,
    runListT: runListT,
    runListTRec: runListTRec,
    scanl: scanl,
    singleton: singleton,
    tail: tail,
    take: take,
    takeWhile: takeWhile,
    uncons: uncons,
    unfold: unfold,
    wrapEffect: wrapEffect,
    wrapLazy: wrapLazy,
    zipWith: zipWith,
    "zipWith'": zipWith$prime,
    newtypeListT: newtypeListT,
    semigroupListT: semigroupListT,
    monoidListT: monoidListT,
    functorListT: functorListT,
    unfoldableListT: unfoldableListT,
    unfoldable1ListT: unfoldable1ListT,
    applyListT: applyListT,
    applicativeListT: applicativeListT,
    bindListT: bindListT,
    monadListT: monadListT,
    monadTransListT: monadTransListT,
    altListT: altListT,
    plusListT: plusListT,
    alternativeListT: alternativeListT,
    monadZeroListT: monadZeroListT,
    monadPlusListT: monadPlusListT,
    monadEffectListT: monadEffectListT
};
