import React from 'react'
import { ComponentRegistry, ProviderProps } from './types'

const DynamicFormContext = React.createContext({})

export const DynamicFormProvider = ({
  children,
  components
}: ProviderProps) => {
  return (
    <DynamicFormContext.Provider value={components}>
      {children}
    </DynamicFormContext.Provider>
  )
}

export const useDynamicFormContext = () =>
  React.useContext(DynamicFormContext) as ComponentRegistry
