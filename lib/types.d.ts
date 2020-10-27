import { ReactNode } from 'react';
import { FieldError, UseFormMethods, ValidationMode } from 'react-hook-form';
export declare type ComponentRegistry = {
    [key: string]: any;
};
export declare type ProviderProps = {
    children: ReactNode;
    components: ComponentRegistry;
};
export declare type FormComponentConfig = {
    [key: string]: any;
};
export declare type ComponentProps = {
    methods: UseFormMethods;
    validators: {
        [key: string]: (value: any) => true | string;
    };
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
//# sourceMappingURL=types.d.ts.map