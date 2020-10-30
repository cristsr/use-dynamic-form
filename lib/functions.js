var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var createValidators = function (conf, methods) {
    if (!conf.validators) {
        return null;
    }
    if (!conf.validators.validate) {
        return conf.validators;
    }
    var validations = conf.validators.validate;
    var validate = Object.keys(validations)
        .map(function (key) { return ({
        key: key,
        fn: validations[key](methods)
    }); })
        .reduce(function (acc, curr) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[curr.key] = curr.fn, _a)));
    }, {});
    return __assign(__assign({}, conf.validators), { validate: validate });
};
export var getCurrentError = function (conf, errors) {
    if (Object.keys(errors).length === 0) {
        return false;
    }
    if (!errors[conf.name]) {
        return false;
    }
    return errors[conf.name];
};
//# sourceMappingURL=functions.js.map