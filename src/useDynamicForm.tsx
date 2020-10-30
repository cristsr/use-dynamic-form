import React from 'react'
import { useForm } from 'react-hook-form'
import { createValidators, getCurrentError } from './functions'
import Switch from './Switch'
import { ComponentProps, DynamicFormConfig, FormComponentConfig } from './types'
import { UseFormOptions }  from 'react-hook-form'

export const useDynamicForm = ({ config, mode, defaultValues }: DynamicFormConfig) => {
  const formConfig: UseFormOptions = {
    mode: mode || 'onChange',
    defaultValues: defaultValues || {}
  }

  const methods = useForm(formConfig)
  const { errors } = methods

  const inputs = config.map(
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

  const form = <form>{inputs}</form>

  return {
    form,
    methods
  }
}
