// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Data_Bifoldable = require("../Data.Bifoldable/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Bitraversable = require("../Data.Bitraversable/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var StartEnd = (function () {
    function StartEnd(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    StartEnd.create = function (value0) {
        return function (value1) {
            return new StartEnd(value0, value1);
        };
    };
    return StartEnd;
})();
var DurationEnd = (function () {
    function DurationEnd(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DurationEnd.create = function (value0) {
        return function (value1) {
            return new DurationEnd(value0, value1);
        };
    };
    return DurationEnd;
})();
var StartDuration = (function () {
    function StartDuration(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    StartDuration.create = function (value0) {
        return function (value1) {
            return new StartDuration(value0, value1);
        };
    };
    return StartDuration;
})();
var DurationOnly = (function () {
    function DurationOnly(value0) {
        this.value0 = value0;
    };
    DurationOnly.create = function (value0) {
        return new DurationOnly(value0);
    };
    return DurationOnly;
})();
var RecurringInterval = (function () {
    function RecurringInterval(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    RecurringInterval.create = function (value0) {
        return function (value1) {
            return new RecurringInterval(value0, value1);
        };
    };
    return RecurringInterval;
})();
var showInterval = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            if (v instanceof StartEnd) {
                return "(StartEnd " + (Data_Show.show(dictShow1)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
            };
            if (v instanceof DurationEnd) {
                return "(DurationEnd " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
            };
            if (v instanceof StartDuration) {
                return "(StartDuration " + (Data_Show.show(dictShow1)(v.value0) + (" " + (Data_Show.show(dictShow)(v.value1) + ")")));
            };
            if (v instanceof DurationOnly) {
                return "(DurationOnly " + (Data_Show.show(dictShow)(v.value0) + ")");
            };
            throw new Error("Failed pattern match at Data.Interval (line 66, column 1 - line 66, column 65): " + [ v.constructor.name ]);
        });
    };
};
var showRecurringInterval = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            return "(RecurringInterval " + (Data_Show.show(Data_Maybe.showMaybe(Data_Show.showInt))(v.value0) + (" " + (Data_Show.show(showInterval(dictShow)(dictShow1))(v.value1) + ")")));
        });
    };
};
var over = function (dictFunctor) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(RecurringInterval.create(v.value0))(f(v.value1));
        };
    };
};
var interval = function (v) {
    return v.value1;
};
var foldableInterval = new Data_Foldable.Foldable(function (dictMonoid) {
    return Data_Foldable.foldMapDefaultL(foldableInterval)(dictMonoid);
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof StartEnd) {
                return v(v(z)(v1.value0))(v1.value1);
            };
            if (v1 instanceof DurationEnd) {
                return v(z)(v1.value1);
            };
            if (v1 instanceof StartDuration) {
                return v(z)(v1.value0);
            };
            return z;
        };
    };
}, function (x) {
    return Data_Foldable.foldrDefault(foldableInterval)(x);
});
var foldableRecurringInterval = new Data_Foldable.Foldable(function (dictMonoid) {
    return Data_Foldable.foldMapDefaultL(foldableRecurringInterval)(dictMonoid);
}, function (f) {
    return function (i) {
        return function ($248) {
            return Data_Foldable.foldl(foldableInterval)(f)(i)(interval($248));
        };
    };
}, function (f) {
    return function (i) {
        return function ($249) {
            return Data_Foldable.foldr(foldableInterval)(f)(i)(interval($249));
        };
    };
});
var eqInterval = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                if (x instanceof StartEnd && y instanceof StartEnd) {
                    return Data_Eq.eq(dictEq1)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
                };
                if (x instanceof DurationEnd && y instanceof DurationEnd) {
                    return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
                };
                if (x instanceof StartDuration && y instanceof StartDuration) {
                    return Data_Eq.eq(dictEq1)(x.value0)(y.value0) && Data_Eq.eq(dictEq)(x.value1)(y.value1);
                };
                if (x instanceof DurationOnly && y instanceof DurationOnly) {
                    return Data_Eq.eq(dictEq)(x.value0)(y.value0);
                };
                return false;
            };
        });
    };
};
var eqRecurringInterval = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq(Data_Maybe.eqMaybe(Data_Eq.eqInt))(x.value0)(y.value0) && Data_Eq.eq(eqInterval(dictEq)(dictEq1))(x.value1)(y.value1);
            };
        });
    };
};
var ordInterval = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqInterval(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                if (x instanceof StartEnd && y instanceof StartEnd) {
                    var v = Data_Ord.compare(dictOrd1)(x.value0)(y.value0);
                    if (v instanceof Data_Ordering.LT) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Ordering.GT) {
                        return Data_Ordering.GT.value;
                    };
                    return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
                };
                if (x instanceof StartEnd) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof StartEnd) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof DurationEnd && y instanceof DurationEnd) {
                    var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                    if (v instanceof Data_Ordering.LT) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Ordering.GT) {
                        return Data_Ordering.GT.value;
                    };
                    return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
                };
                if (x instanceof DurationEnd) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof DurationEnd) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof StartDuration && y instanceof StartDuration) {
                    var v = Data_Ord.compare(dictOrd1)(x.value0)(y.value0);
                    if (v instanceof Data_Ordering.LT) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Ordering.GT) {
                        return Data_Ordering.GT.value;
                    };
                    return Data_Ord.compare(dictOrd)(x.value1)(y.value1);
                };
                if (x instanceof StartDuration) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof StartDuration) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof DurationOnly && y instanceof DurationOnly) {
                    return Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                };
                throw new Error("Failed pattern match at Data.Interval (line 65, column 8 - line 65, column 68): " + [ x.constructor.name, y.constructor.name ]);
            };
        });
    };
};
var ordRecurringInterval = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqRecurringInterval(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                var v = Data_Ord.compare(Data_Maybe.ordMaybe(Data_Ord.ordInt))(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordInterval(dictOrd)(dictOrd1))(x.value1)(y.value1);
            };
        });
    };
};
var bifunctorInterval = new Data_Bifunctor.Bifunctor(function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof StartEnd) {
                return new StartEnd(v1(v2.value0), v1(v2.value1));
            };
            if (v2 instanceof DurationEnd) {
                return new DurationEnd(v(v2.value0), v1(v2.value1));
            };
            if (v2 instanceof StartDuration) {
                return new StartDuration(v1(v2.value0), v(v2.value1));
            };
            if (v2 instanceof DurationOnly) {
                return new DurationOnly(v(v2.value0));
            };
            throw new Error("Failed pattern match at Data.Interval (line 75, column 1 - line 75, column 49): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
});
var bifunctorRecurringInterval = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return new RecurringInterval(v.value0, Data_Bifunctor.bimap(bifunctorInterval)(f)(g)(v.value1));
        };
    };
});
var functorInterval = new Data_Functor.Functor(Data_Bifunctor.bimap(bifunctorInterval)(Control_Category.identity(Control_Category.categoryFn)));
var extendInterval = new Control_Extend.Extend(function () {
    return functorInterval;
}, function (f) {
    return function (v) {
        if (v instanceof StartEnd) {
            return new StartEnd(f(v), f(v));
        };
        if (v instanceof DurationEnd) {
            return new DurationEnd(v.value0, f(v));
        };
        if (v instanceof StartDuration) {
            return new StartDuration(f(v), v.value1);
        };
        if (v instanceof DurationOnly) {
            return new DurationOnly(v.value0);
        };
        throw new Error("Failed pattern match at Data.Interval (line 111, column 1 - line 111, column 47): " + [ f.constructor.name, v.constructor.name ]);
    };
});
var functorRecurringInterval = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new RecurringInterval(v.value0, Data_Functor.map(functorInterval)(f)(v.value1));
    };
});
var extendRecurringInterval = new Control_Extend.Extend(function () {
    return functorRecurringInterval;
}, function (f) {
    return function (v) {
        return new RecurringInterval(v.value0, Control_Extend.extend(extendInterval)(Data_Function["const"](f(v)))(v.value1));
    };
});
var traversableInterval = new Data_Traversable.Traversable(function () {
    return foldableInterval;
}, function () {
    return functorInterval;
}, function (dictApplicative) {
    return Data_Traversable.sequenceDefault(traversableInterval)(dictApplicative);
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof StartEnd) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(StartEnd.create)(v(v1.value0)))(v(v1.value1));
            };
            if (v1 instanceof DurationEnd) {
                return Data_Functor.mapFlipped((dictApplicative.Apply0()).Functor0())(v(v1.value1))(DurationEnd.create(v1.value0));
            };
            if (v1 instanceof StartDuration) {
                return Data_Functor.mapFlipped((dictApplicative.Apply0()).Functor0())(v(v1.value0))(function (v2) {
                    return new StartDuration(v2, v1.value1);
                });
            };
            if (v1 instanceof DurationOnly) {
                return Control_Applicative.pure(dictApplicative)(new DurationOnly(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Interval (line 97, column 1 - line 97, column 57): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
});
var traversableRecurringInterval = new Data_Traversable.Traversable(function () {
    return foldableRecurringInterval;
}, function () {
    return functorRecurringInterval;
}, function (dictApplicative) {
    return Data_Traversable.sequenceDefault(traversableRecurringInterval)(dictApplicative);
}, function (dictApplicative) {
    return function (f) {
        return function (i) {
            return over((dictApplicative.Apply0()).Functor0())(Data_Traversable.traverse(traversableInterval)(dictApplicative)(f))(i);
        };
    };
});
var bifoldableInterval = new Data_Bifoldable.Bifoldable(function (dictMonoid) {
    return Data_Bifoldable.bifoldMapDefaultL(bifoldableInterval)(dictMonoid);
}, function (v) {
    return function (v1) {
        return function (z) {
            return function (v2) {
                if (v2 instanceof StartEnd) {
                    return v1(v1(z)(v2.value0))(v2.value1);
                };
                if (v2 instanceof DurationEnd) {
                    return v1(v(z)(v2.value0))(v2.value1);
                };
                if (v2 instanceof StartDuration) {
                    return v1(v(z)(v2.value1))(v2.value0);
                };
                if (v2 instanceof DurationOnly) {
                    return v(z)(v2.value0);
                };
                throw new Error("Failed pattern match at Data.Interval (line 89, column 1 - line 89, column 51): " + [ v.constructor.name, v1.constructor.name, z.constructor.name, v2.constructor.name ]);
            };
        };
    };
}, function (x) {
    return Data_Bifoldable.bifoldrDefault(bifoldableInterval)(x);
});
var bifoldableRecurringInterval = new Data_Bifoldable.Bifoldable(function (dictMonoid) {
    return Data_Bifoldable.bifoldMapDefaultL(bifoldableRecurringInterval)(dictMonoid);
}, function (f) {
    return function (g) {
        return function (i) {
            return function ($250) {
                return Data_Bifoldable.bifoldl(bifoldableInterval)(f)(g)(i)(interval($250));
            };
        };
    };
}, function (f) {
    return function (g) {
        return function (i) {
            return function ($251) {
                return Data_Bifoldable.bifoldr(bifoldableInterval)(f)(g)(i)(interval($251));
            };
        };
    };
});
var bitraversableInterval = new Data_Bitraversable.Bitraversable(function () {
    return bifoldableInterval;
}, function () {
    return bifunctorInterval;
}, function (dictApplicative) {
    return Data_Bitraversable.bisequenceDefault(bitraversableInterval)(dictApplicative);
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof StartEnd) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(StartEnd.create)(v1(v2.value0)))(v1(v2.value1));
                };
                if (v2 instanceof DurationEnd) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(DurationEnd.create)(v(v2.value0)))(v1(v2.value1));
                };
                if (v2 instanceof StartDuration) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(StartDuration.create)(v1(v2.value0)))(v(v2.value1));
                };
                if (v2 instanceof DurationOnly) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(DurationOnly.create)(v(v2.value0));
                };
                throw new Error("Failed pattern match at Data.Interval (line 104, column 1 - line 104, column 57): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
            };
        };
    };
});
var bitraversableRecurringInterval = new Data_Bitraversable.Bitraversable(function () {
    return bifoldableRecurringInterval;
}, function () {
    return bifunctorRecurringInterval;
}, function (dictApplicative) {
    return Data_Bitraversable.bisequenceDefault(bitraversableRecurringInterval)(dictApplicative);
}, function (dictApplicative) {
    return function (l) {
        return function (r) {
            return function (i) {
                return over((dictApplicative.Apply0()).Functor0())(Data_Bitraversable.bitraverse(bitraversableInterval)(dictApplicative)(l)(r))(i);
            };
        };
    };
});
module.exports = {
    StartEnd: StartEnd,
    DurationEnd: DurationEnd,
    StartDuration: StartDuration,
    DurationOnly: DurationOnly,
    RecurringInterval: RecurringInterval,
    eqRecurringInterval: eqRecurringInterval,
    ordRecurringInterval: ordRecurringInterval,
    showRecurringInterval: showRecurringInterval,
    functorRecurringInterval: functorRecurringInterval,
    bifunctorRecurringInterval: bifunctorRecurringInterval,
    foldableRecurringInterval: foldableRecurringInterval,
    bifoldableRecurringInterval: bifoldableRecurringInterval,
    traversableRecurringInterval: traversableRecurringInterval,
    bitraversableRecurringInterval: bitraversableRecurringInterval,
    extendRecurringInterval: extendRecurringInterval,
    eqInterval: eqInterval,
    ordInterval: ordInterval,
    showInterval: showInterval,
    functorInterval: functorInterval,
    bifunctorInterval: bifunctorInterval,
    foldableInterval: foldableInterval,
    bifoldableInterval: bifoldableInterval,
    traversableInterval: traversableInterval,
    bitraversableInterval: bitraversableInterval,
    extendInterval: extendInterval
};
