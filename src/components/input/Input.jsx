import React from 'react'
import shortid from 'shortid'

import './Input.scss'

const uniqueId = shortid()
const Input = ({ type, value, inputlabel, name, className, handleChange, inputContainerClass, error }) => {
  return (
    <div className={inputContainerClass}>
      <label htmlFor={`input-${uniqueId}`} className="input-label">{inputlabel}</label>
      <input 
        value={value}
        type={type || 'text'}
        name={name}
        className={className}
        onChange={ (e) => handleChange(e) }
        id={`input-${uniqueId}`}
      />
      { error && <p>{error}</p> }
    </div>
  )
}

export default Input