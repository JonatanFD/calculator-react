import React from 'react'
import '../css/Display.css'

export default function Display({content}) {
  return (
    <div className='display-container'>
        {content}
    </div>
  )
}
