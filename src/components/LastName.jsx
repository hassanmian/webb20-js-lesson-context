import React from 'react'
import TextComponent from './TextComponent'

export default function LastName({lastName}) {
  return (
    <div>
      <TextComponent name={lastName}/>
    </div>
  )
}
