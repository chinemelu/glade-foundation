import React from 'react'

import './button.css'

const button = ({ children, className, type }) => {
  return (
    <button 
      className={ `${className} app-btn` }
      type={type}
    >
      {children}
    </button>
  )
}

export default button