import React from 'react'
import Ex1_CompC from './Ex1_CompC'

export default function Ex1_CompB(props) {
  // props = {userInput: input}
  return (
    <div
      style={{ backgroundColor: "blue" }}
    >Ex1_CompB
      <Ex1_CompC userInput={props.userInput} />
    </div>
  )
}
