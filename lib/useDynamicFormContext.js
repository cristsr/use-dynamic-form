"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDynamicFormContext = exports.DynamicFormProvider = void 0;
var react_1 = __importDefault(require("react"));
var DynamicFormContext = react_1.default.createContext({});
exports.DynamicFormProvider = function (_a) {
    var children = _a.children, components = _a.components;
    return (react_1.default.createElement(DynamicFormContext.Provider, { value: components }, children));
};
exports.useDynamicFormContext = function () {
    return react_1.default.useContext(DynamicFormContext);
};
//# sourceMappingURL=useDynamicFormContext.js.map