import React from 'react'
import css from '../Label/Label.css'

function Label({label,labelClass}) {
  return (
    < >
        <label  className={labelClass}>{label}</label>
    </>
  )
}

export default Label