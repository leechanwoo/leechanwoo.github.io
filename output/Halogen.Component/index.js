// Generated by purs version 0.12.5
"use strict";
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Halogen_Data_OrdBox = require("../Halogen.Data.OrdBox/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var ComponentSlot = (function () {
    function ComponentSlot(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ComponentSlot.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ComponentSlot(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    return ComponentSlot;
})();
var unComponentSlot = function (f) {
    return function (cs) {
        return f(cs.value0)(cs.value1)(cs.value2)(cs.value3)(cs.value4)(cs.value5);
    };
};
var unComponent = Unsafe_Coerce.unsafeCoerce;
var mkComponentSlot = ComponentSlot.create;
var mkComponent = Unsafe_Coerce.unsafeCoerce;
var parentComponent = function (dictOrd) {
    return function (spec) {
        return mkComponent({
            initialState: spec.initialState,
            render: spec.render,
            "eval": spec["eval"],
            receiver: spec.receiver,
            initializer: Data_Maybe.Nothing.value,
            finalizer: Data_Maybe.Nothing.value,
            mkOrdBox: Halogen_Data_OrdBox.mkOrdBox(dictOrd)
        });
    };
};
var lifecycleParentComponent = function (dictOrd) {
    return function (spec) {
        return mkComponent({
            initialState: spec.initialState,
            render: spec.render,
            "eval": spec["eval"],
            receiver: spec.receiver,
            initializer: spec.initializer,
            finalizer: spec.finalizer,
            mkOrdBox: Halogen_Data_OrdBox.mkOrdBox(dictOrd)
        });
    };
};
var lifecycleComponent = function (dictBifunctor) {
    return function (spec) {
        return mkComponent({
            initialState: spec.initialState,
            render: spec.render,
            "eval": spec["eval"],
            receiver: spec.receiver,
            initializer: spec.initializer,
            finalizer: spec.finalizer,
            mkOrdBox: Halogen_Data_OrdBox.mkOrdBox(Data_Ord.ordVoid)
        });
    };
};
var hoistSlot = function (dictBifunctor) {
    return function (dictFunctor) {
        return function (nat) {
            return unComponentSlot(function (p) {
                return function (ctor) {
                    return function (input) {
                        return function (inputQuery) {
                            return function (outputQuery) {
                                return function (projQuery) {
                                    return mkComponentSlot(p)(hoist(dictBifunctor)(dictFunctor)(nat)(ctor))(input)(inputQuery)(outputQuery)(projQuery);
                                };
                            };
                        };
                    };
                };
            });
        };
    };
};
var hoist = function (dictBifunctor) {
    return function (dictFunctor) {
        return function (nat) {
            return unComponent(function (c) {
                return mkComponent({
                    initialState: c.initialState,
                    render: function ($16) {
                        return Data_Bifunctor.lmap(dictBifunctor)(hoistSlot(dictBifunctor)(dictFunctor)(nat))(c.render($16));
                    },
                    "eval": function ($17) {
                        return Halogen_Query_HalogenM.hoist(dictFunctor)(nat)(c["eval"]($17));
                    },
                    receiver: c.receiver,
                    initializer: c.initializer,
                    finalizer: c.finalizer,
                    mkOrdBox: c.mkOrdBox
                });
            });
        };
    };
};
var functorSlotF = new Data_Functor.Functor(function (f) {
    return unComponentSlot(function (p) {
        return function (ctor) {
            return function (j) {
                return function (g) {
                    return function (h) {
                        return function (i) {
                            return mkComponentSlot(p)(ctor)(j)(g)(function ($18) {
                                return Data_Functor.map(Data_Maybe.functorMaybe)(f)(h($18));
                            })(i);
                        };
                    };
                };
            };
        };
    });
});
var component = function (dictBifunctor) {
    return function (spec) {
        return lifecycleComponent(dictBifunctor)({
            initialState: spec.initialState,
            render: spec.render,
            "eval": spec["eval"],
            receiver: spec.receiver,
            initializer: Data_Maybe.Nothing.value,
            finalizer: Data_Maybe.Nothing.value
        });
    };
};
var bifunctorSlotF = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return unComponentSlot(function (p) {
            return function (ctor) {
                return function (input) {
                    return function (inputQuery) {
                        return function (outputQuery) {
                            return function (projQuery) {
                                return mkComponentSlot(f(p))(ctor)(input)(inputQuery)(function ($19) {
                                    return Data_Functor.map(Data_Maybe.functorMaybe)(g)(outputQuery($19));
                                })(projQuery);
                            };
                        };
                    };
                };
            };
        });
    };
});
module.exports = {
    mkComponent: mkComponent,
    unComponent: unComponent,
    component: component,
    lifecycleComponent: lifecycleComponent,
    parentComponent: parentComponent,
    lifecycleParentComponent: lifecycleParentComponent,
    hoist: hoist,
    mkComponentSlot: mkComponentSlot,
    unComponentSlot: unComponentSlot,
    hoistSlot: hoistSlot,
    bifunctorSlotF: bifunctorSlotF,
    functorSlotF: functorSlotF
};
