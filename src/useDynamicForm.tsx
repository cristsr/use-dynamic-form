import React from 'react'
import { useForm } from 'react-hook-form'
import { createValidators, getCurrentError } from './functions'
import Switch from './Switch'
import { ComponentProps, DynamicForm, DynamicFormConfig, FormComponentConfig } from './types'
import { UseFormOptions }  from 'react-hook-form'

export const useDynamicForm = ({ config, mode, defaultValues }: DynamicFormConfig): DynamicForm => {
  const formConfig: UseFormOptions = {
    mode: mode || 'onChange',
    defaultValues: defaultValues || {}
  }

  const methods = useForm(formConfig)
  const { errors } = methods

  const form = config.map(
    (value: FormComponentConfig, index: number) => {
      const validators = createValidators(value, methods)
      const error = getCurrentError(value, errors)

      const props: ComponentProps = {
        ...value,
        methods,
        validators,
        error
      }

      return <Switch key={index} {...props} />
    }
  )

  return {
    form,
    methods
  }
}
