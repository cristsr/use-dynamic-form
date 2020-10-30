import { FormComponentConfig, ValidatorFn, Validators } from './types'
import { FieldError, FieldErrors, UseFormMethods } from 'react-hook-form'

export const createValidators = (
  conf: FormComponentConfig,
  methods: UseFormMethods
): Validators => {

  if (!conf.validators) {
    return null
  }

  if (!conf.validators.validate) {
    return conf.validators
  }

  const validations = conf.validators.validate;

  const validate = Object.keys(validations)
    .map((key) => ({
      key,
      fn: validations[key](methods) as ValidatorFn
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
