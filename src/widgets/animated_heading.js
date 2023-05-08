import React, { useEffect } from 'react'
import { animated,useSpring, useTrail } from 'react-spring'
import Space from '../widgets/space'
import Heading from '../widgets/heading'
import { Button, Container, Stack } from 'react-bootstrap'
const AnimatedHeading = ({word,className}) => {
    const wordArray = word.split("");
  

     const [trail,api]= useTrail(wordArray.length,()=>({
         from:{y:1000,opacity:0},
         config:{duration:200}
     }))

     const handleClick = ()=>{
        api.start((i)=>({
            from:{y:1000,opacity:0},
            to:{y:0,opacity:1},
            delay:0
        }))
     }

     useEffect(() => {
        handleClick()
        
     }, []);
    return (            
                <Stack className={className} direction='horizontal' >
                {trail.map((props,index)=>{
                                    return <animated.div  style={props}>
                                            <Heading className={wordArray[index]==" "&&'ps-3'} text={wordArray[index]}/>
                                            </animated.div >
                                })}
                </Stack>
    )
}

export default AnimatedHeading
