import React from 'react'
import Title from './Title.js'

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
function DigitaClock() {
  return (
    <Title>{today.toLocaleDateString("en-US", options)}</Title>
  )
}

export default DigitaClock