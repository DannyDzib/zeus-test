import React, { useState, useMemo } from 'react'
import { ModalContext, initialState } from './ModalContext'

const ModalProvider = (props) => {
  const { children } = props
  const [modalState, setModalState] = useState(initialState)

  const handleUpdateState = (newState) => {
    setModalState((prevState) => ({
      ...prevState,
      ...newState,
    }))
  }

  const handleOpenModal = (config) => handleUpdateState({
    show: true,
    ...config,
  })

  const handleCloseModal = () => setModalState(initialState)

  const contextValue = useMemo(
    () => ({
      modalState,
      handleOpenModal,
      handleCloseModal,
    }),
    [modalState],
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider }
