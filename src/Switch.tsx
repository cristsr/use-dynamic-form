import React from 'react'
import { useDynamicFormContext } from './useDynamicFormContext'
import { ComponentProps } from './types'

const Switch = ({ props }: ComponentProps) => {
  const components = useDynamicFormContext()
  const Component = components[props.type]
  return <Component {...props} />
}

export default Switch
