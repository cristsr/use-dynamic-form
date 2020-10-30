import { FormComponentConfig, Validators } from './types';
import { FieldError, FieldErrors, UseFormMethods } from 'react-hook-form';
export declare const createValidators: (conf: FormComponentConfig, methods: UseFormMethods) => Validators;
export declare const getCurrentError: (conf: FormComponentConfig, errors: FieldErrors) => FieldError | false;
//# sourceMappingURL=functions.d.ts.map