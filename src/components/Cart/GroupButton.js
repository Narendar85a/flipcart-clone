import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const GroupButton = () => {

 const [counter, setCounter] = useState(1);

 const handleDecrement = () => {
    setCounter(counter - 1);
 }

 const handleIncrement = () => {
    setCounter(counter + 1);
 }

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
    <Button className='' onClick={() => handleDecrement()} disabled={counter === 0}>-</Button>
    <Button disabled>{counter}</Button>
    <Button className='' onClick={() => handleIncrement()}>+</Button>
  </ButtonGroup>
    )
}

export default GroupButton