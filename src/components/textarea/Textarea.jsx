import React from 'react'
import shortid from 'shortid'

import './Textarea.scss'

const TextArea = ({ value, inputlabel, name, className, handleChange, inputContainerClass, error }) => {
  const uniqueId = shortid()
  return (
    <div className={inputContainerClass}>
      <label htmlFor={`input-${uniqueId}`} className="input-label">{inputlabel}</label>
      <textarea 
        value={value}
        name={name}
        className={className}
        onChange={ (e) => handleChange(e) }
        id={`input-${uniqueId}`}
      />
      { error && <p>{error}</p> }
    </div>
  )
}

export default TextArea