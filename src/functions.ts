import { FormComponentConfig } from './types'
import { FieldError, FieldErrors, UseFormMethods } from 'react-hook-form'

export const createValidators = (
  conf: FormComponentConfig,
  methods: UseFormMethods
) => {
  if (!conf.validators) {
    return {}
  }

  if (!conf.validators.validate) {
    return conf.validators
  }

  const validate = Object.keys(conf.validators.validate)
    .map((key) => ({
      key,
      fn: conf.validators.validate[key](methods)
    }))
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.key]: curr.fn
      }),
      {}
    )

  return {
    ...conf.validators,
    validate
  }
}

export const getCurrentError = (
  conf: FormComponentConfig,
  errors: FieldErrors
): FieldError | false => {
  if (Object.keys(errors).length === 0) {
    return false
  }

  if (!errors[conf.name]) {
    return false
  }

  return errors[conf.name]
}
