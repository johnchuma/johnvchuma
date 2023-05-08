import React, { useEffect } from 'react'
import { animated,useSpring } from 'react-spring'
import Space from '../widgets/space'
import Heading from '../widgets/heading'
import { Container } from 'react-bootstrap'
const AnimationPage = () => {
    const word = "Animate this";
    const wordArray = word.split(" ")
    
     const [animation,api]= useSpring(()=>({
        from:{opacity:0,color:"black",x:-1000},
        config:{duration:500}
     }))
    
     const handleClick = ()=>{
         api.start({
            from:{opacity:0,color:"black",x:-1000},
            to:{opacity:1,scale:1,color:"red",x:0}
         })
     }
    return (
        <div>
           <Space/>
           <Container>
           <animated.div  style={animation}>

<Heading text={`Animate this`}/>
</animated.div>
<button className='btn' onClick={handleClick} >Click me</button>
           </Container>
           
           <Space/>
        </div>
       
    )
}

export default AnimationPage
