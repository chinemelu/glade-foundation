import React from 'react'

import './button.css'

const button = ({ children, className }) => {
  return (
    <button className={ `${className} app-btn` }>
      {children}
    </button>
  )
}

export default button