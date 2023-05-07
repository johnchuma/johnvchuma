import React from 'react'
import { Image } from 'react-bootstrap'

const Avatar = ({size,src,className = 'rounded-circle'}) => {
    return (
        <Image src={src} className={className} style={{height:size,width:size,objectFit:'cover',filter:'revert-layer'}}/>
    )
}

export default Avatar
