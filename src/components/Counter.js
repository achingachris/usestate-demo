import { useState } from 'react'

const Counter = () => {
  const [initial, updater] = useState(0)
  const clickEvent = () => updater(initial + 1)
  return (
    <>
      <button onClick={clickEvent}>{initial}</button>
    </>
  )
}

export default Counter
