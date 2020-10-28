import React from 'react';
var DynamicFormContext = React.createContext({});
export var DynamicFormProvider = function (_a) {
    var children = _a.children, components = _a.components;
    return (React.createElement(DynamicFormContext.Provider, { value: components }, children));
};
export var useDynamicFormContext = function () {
    return React.useContext(DynamicFormContext);
};
//# sourceMappingURL=useDynamicFormContext.js.map