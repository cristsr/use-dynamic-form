"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var functions_1 = require("./functions");
var Switch_1 = __importDefault(require("./Switch"));
var useDynamicForm = function (_a) {
    var config = _a.config, mode = _a.mode, defaultValues = _a.defaultValues;
    var formConfig = {
        mode: mode || 'onChange',
        defaultValues: defaultValues || {}
    };
    var methods = react_hook_form_1.useForm(formConfig);
    var errors = methods.errors;
    var inputs = config.map(function (_a, index) {
        var type = _a.type, value = __rest(_a, ["type"]);
        var validators = functions_1.createValidators(value, methods);
        var error = functions_1.getCurrentError(value, errors);
        var props = __assign(__assign({}, value), { type: type,
            methods: methods,
            validators: validators,
            error: error });
        return react_1.default.createElement(Switch_1.default, __assign({ key: index }, props));
    });
    var form = react_1.default.createElement("form", null, inputs);
    return {
        form: form,
        methods: methods
    };
};
exports.default = useDynamicForm;
//# sourceMappingURL=useDynamicForm.js.map