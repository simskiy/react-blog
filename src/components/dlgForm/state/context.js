import { createContext, useContext } from 'react'

const DlgFormContext = createContext()
DlgFormContext.displayName = 'DlgFormContext'

function DlgFormProvider({ children, value }) {
  return (
    <DlgFormContext.Provider value={value}>{children}</DlgFormContext.Provider>
  );
}

function useDlgFormContext() {
  const context = useContext(DlgFormContext)
  if (!context) {
    throw new Error(
      'useDlgFormContext must be used within a DlgFormProvider'
    )
  }
  return context
}

export {useDlgFormContext, DlgFormProvider}