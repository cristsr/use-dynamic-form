import { ReactNode } from 'react'
import { FieldError, UseFormMethods, ValidationMode } from 'react-hook-form'

export type ComponentRegistry = {
  [key: string]: any
}

export type ProviderProps = {
  children: ReactNode
  components: ComponentRegistry
}

export type ValidationFn = (methods: UseFormMethods | null) => ValidatorFn
export type ValidatorFn = (value: any | null) => true | string
export type SimpleValidation =  {
  value: any
  message: string
}
export type Validate =  {
  [key: string]: ValidationFn | ValidatorFn
}
export type Validators = {
  [key: string]: SimpleValidation | Validate
  validate: Validate
} | null

export type FormComponentConfig = {
  name: string
  type: string
  label?: string
  placeholder?: string
  display?: string
  options?: any[]
  validators?: Validators
  [key: string]: any
}

export type ComponentProps = {
  methods: UseFormMethods
  error: FieldError | false
} & FormComponentConfig

export type DefaultValues = {
  [key: string]: any
} | null

export type DynamicFormConfig = {
  config: FormComponentConfig[]
  mode: keyof ValidationMode
  defaultValues?: DefaultValues
}
