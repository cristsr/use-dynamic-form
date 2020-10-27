import { ReactNode } from 'react'
import { FieldError, UseFormMethods, ValidationMode } from 'react-hook-form'

export type ComponentRegistry = {
  [key: string]: any
}

export type ProviderProps = {
  children: ReactNode
  components: ComponentRegistry
}

export type FormComponentConfig = {
  [key: string]: any
}

export type ComponentProps = {
  methods: UseFormMethods
  validators: { [key: string]: (value: any) => true | string }
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
