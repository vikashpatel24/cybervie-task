import React from 'react'
import Background from './Background'

const LayoutNew = ({children}) => {
    console.log("newLayout")
  return (
    <>
        <Background/>
        {children}
    </>
  )
}

export default LayoutNew