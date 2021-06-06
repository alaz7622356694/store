import React from 'react'







const Backdrop=(props)=>{
    return(
props.show ? <div className='backdrop' onClick={props.click}></div> : null
    )
}

export default Backdrop