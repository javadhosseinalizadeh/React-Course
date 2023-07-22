import React, {useState}from 'react'
import Sample from './sample'

const StateInFc = () => {
  /* 
  syntax is like this => 
       const [state, setState] = useState(initialize)
  */

  const [message, setMessage] = useState('State in function component')

  const [isVisible, setIsVisible] = useState(false)
 

  const addMessageHandler = () => {
    setMessage(message + 'Added new message')
  }

  const toggleShowHandler = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div>

      <hr />
      <button onClick={addMessageHandler}>Add message</button>
      <button onClick={toggleShowHandler}>Toggle show</button>
      {isVisible && <Sample message={message}/>}
    </div>
  )
}

export default StateInFc