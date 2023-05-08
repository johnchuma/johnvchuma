import React, { useEffect, useImperativeHandle, useRef } from 'react'
import {animated, useSpring } from 'react-spring'

const SlideAnimation = ({component,direction= "right",autoplay=true}) => {
    const from={x:direction =="right"?-1000:1000};
    const to={x:0};
    const [styles,api] = useSpring(()=>({
        from
    }))
    const triggerAnimation  = ()=>{
       api.start({
        from,
        to,
        delay:2000
       })
    }

    useEffect(() => {
        if(autoplay){
            triggerAnimation()
        }
    }, []);
    return (
        <animated.div  style={styles}>
            {component}
        </animated.div>
      
    )
}

export default SlideAnimation
