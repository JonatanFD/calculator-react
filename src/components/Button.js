import React from 'react'
import '../css/Button.css'

export default function Button({symbol, action}) {
  return (
    <button
        className= {`${symbol=== "CLEAR" ? "clear-button" : "general-button-container"}  ${ isNaN(symbol) ? "operator-button" : "number-button" } `}
        onClick={() => action(symbol)}
    >
        {symbol}
    </button>
  )
}
