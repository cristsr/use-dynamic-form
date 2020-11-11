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
import React from 'react';
import { useForm } from 'react-hook-form';
import { createValidators, getCurrentError } from './functions';
import Switch from './Switch';
export var useDynamicForm = function (_a) {
    var config = _a.config, mode = _a.mode, defaultValues = _a.defaultValues;
    var formConfig = {
        mode: mode || 'onChange',
        defaultValues: defaultValues || {}
    };
    var methods = useForm(formConfig);
    var errors = methods.errors;
    var form = config.map(function (value, index) {
        var validators = createValidators(value, methods);
        var error = getCurrentError(value, errors);
        var props = __assign(__assign({}, value), { methods: methods,
            validators: validators,
            error: error });
        return React.createElement(Switch, __assign({ key: index }, props));
    });
    return {
        form: form,
        methods: methods
    };
};
//# sourceMappingURL=useDynamicForm.js.map