import React from 'react'
import { Button } from 'react-bootstrap'
const Boxs = ({box, addToBreak}) => {
    const styles={
        width: 35, 
        height: 35, 
        borderRadius: 50,
        fontSize: 10,
    }
  return (
    <Button className='box-1 border-0 fw-bold' style={styles} onClick={()=>addToBreak(box)}>{box}</Button> 
  )
}

export default Boxs