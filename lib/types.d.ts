import { ReactNode } from 'react';
import { FieldError, UseFormMethods, ValidationMode } from 'react-hook-form';
export declare type ComponentRegistry = {
    [key: string]: any;
};
export declare type ProviderProps = {
    children: ReactNode;
    components: ComponentRegistry;
};
export declare type ValidationFn = (methods: UseFormMethods | null) => ValidatorFn;
export declare type ValidatorFn = (value: any | null) => true | string;
export declare type SimpleValidation = {
    value: any;
    message: string;
};
export declare type Validate = {
    [key: string]: ValidationFn | ValidatorFn;
};
export declare type Validators = {
    [key: string]: SimpleValidation | Validate;
    validate: Validate;
} | null;
export declare type FormComponentConfig = {
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    display?: string;
    options?: any[];
    validators?: Validators;
    [key: string]: any;
};
export declare type ComponentProps = {
    methods: UseFormMethods;
    error: FieldError | false;
} & FormComponentConfig;
export declare type DefaultValues = {
    [key: string]: any;
} | null;
export declare type DynamicFormConfig = {
    config: FormComponentConfig[];
    mode: keyof ValidationMode;
    defaultValues?: DefaultValues;
};
export declare type DynamicForm = {
    form: ReactNode;
    methods: UseFormMethods;
};
//# sourceMappingURL=types.d.ts.map