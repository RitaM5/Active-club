import React from 'react'

const Boxs = ({box, addToBreak}) => {
    const styles={
        width: 35, 
        height: 35, 
        borderRadius: 100
    }
  return (
    <div className='box-1' style={styles} onClick={()=>addToBreak(box)}>
       <p className='pt-2 fw-bold'>{box}</p>
    </div>
  )
}

export default Boxs