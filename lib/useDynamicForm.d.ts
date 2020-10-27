/// <reference types="react" />
import { DynamicFormConfig } from './types';
declare const useDynamicForm: ({ config, mode, defaultValues }: DynamicFormConfig) => {
    form: JSX.Element;
    methods: import("react-hook-form").UseFormMethods<Record<string, any>>;
};
export default useDynamicForm;
//# sourceMappingURL=useDynamicForm.d.ts.map