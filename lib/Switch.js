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
import { useDynamicFormContext } from './useDynamicFormContext';
var Switch = function (_a) {
    var props = _a.props;
    var components = useDynamicFormContext();
    var Component = components[props.type];
    return React.createElement(Component, __assign({}, props));
};
export default Switch;
//# sourceMappingURL=Switch.js.map