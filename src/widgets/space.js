import React from 'react'

const Space = ({height}) => {
    return (
        <div>
       <div className='d-none d-md-block' style={{height:height??150}}/>
       <div className='d-block d-md-none' style={{height:height??70}}/>


        </div>
    )
}

export default Space
