import React, { useEffect, useRef } from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import Heading from '../widgets/heading'
import Avatar from '../widgets/avatar'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space'
import { technologies } from '../utils/technologies'
import { blackBackground, textColor } from '../utils/site_colors'
import AnimatedHeading from '../widgets/animated_heading'
import SlideAnimation from '../widgets/slide_animation'
import { useInView } from 'react-intersection-observer'
import {animated, useSpring } from 'react-spring'
import Footer from '../widgets/footer'
import { SiGithub } from 'react-icons/si'
import { FaLink, FaWeebly } from 'react-icons/fa'

const HomePage = () => { 
 const {ref,inView} = useInView()
 const {ref:aboutSecRef,inView:inViewAboutSec} = useInView()

 const animationRef = useRef(null);
 const from = {transform: 'scaleX(0)'}
 const to = {transform: 'scaleX(1.5)'}
 const fadeFrom = {opacity:0,x:150}
 const fadeTo = {opacity:1,x:0}
 const [stylesFade,apiFade] = useSpring(()=>({
  from:fadeFrom,
 config:{duration:400}
}))
const [styles,api] = useSpring(()=>({
  from,
 config:{duration:500}
}))


const triggerFadeAnimation = ()=>{
  console.log("triggered")
  apiFade.start({
    from:fadeFrom,to:fadeTo
  })
}
const resetFadeAnimation = ()=>{
  console.log("reseted")

  apiFade.start({
    to:fadeFrom,from:fadeTo
  })
}
const triggerImageAnimation = ()=>{
  api.start({
    from,to
  })
 }
 const resetAnimation = ()=>{
  api.start({
    from:to,
    to:from
  })
 }
 useEffect(() => {
     if(inView){
      triggerImageAnimation()
     }
     else{
      resetAnimation()
     }
     
 }, [inView]);
 useEffect(()=>{
  if(inViewAboutSec){
    triggerFadeAnimation()
   }
   else{
    resetFadeAnimation()
   }
 },[inViewAboutSec])
    return (
        <>
        <div style={{position:'relative',height:"100vh"}}>
          <div >
            <a href='https://github.com/johnchuma' target='_blank' className='py-0 px-3 d-none d-md-block btn border-0 shadow-none rounded-0'    style={{position:'fixed',backgroundColor:blackBackground, bottom:"50%",right:"5px", transform:"rotate(-90deg) translateY(4.5vw)"}}>
              <Stack direction='horizontal' >
              <SiGithub className='' color={`white`} size={20}/>
              <div>
              <Paragraph fontSize={14} fontWeight={500} className={`mt-2 mb-2 p-0 ms-2  text-white`} text={`Github account`}/>

              </div>
              </Stack>
              
              </a>
          </div>
        <Container id='' className='' >
            <div  className='text-center mt-5'>
            {/* <Stack className='mt-5 d-flex justify-content-center ' direction='horizontal'> */}
            {/* <Heading className={'p-0 m-0 '} text={`HELLO, I AM`}/> */}
            <AnimatedHeading className={'d-flex justify-content-center'} word={`HELLO, I AM`}/>

            {/* </Stack> */}
             <Row className='align-items-center'>
                <Col md="4" className='text-start d-none d-md-block' >
                  <SlideAnimation ref={animationRef} autoplay={true} component={
                    <Paragraph indent={30} text={`MERN stack developer and Flutter enthusiast experienced in Git, AWS services, and agile methodologies. `}/>
                  }/>
                </Col>
                <Col md="8">
                <AnimatedHeading word={`SOFTWARE`}/>
                </Col>
             </Row>     
             <AnimatedHeading className={'d-flex justify-content-center'} word={`DEVELOPER`}/>

            {/* <Heading text={`DEVELOPER`}/> */}
            <Col md="4" className='text-start d-block d-md-none' >
                    <SlideAnimation direction='right' component={
                    <Paragraph indent={30} text={`MERN stack developer and Flutter enthusiast experienced in Git, AWS services, and agile methodologies. `}/>
                    }/>
                </Col>
            </div>
           <Space/>
           <Stack direction='horizontal' className='d-flex justify-content-between '>
            <Paragraph text={`Current location`}/>
            <Paragraph fontSize={18} text={`(SCROLL)`}/>
            
           </Stack>

           <Row className='mt-2 text-center'>
                <Col md={3}>
                </Col>
                <Col>
                <div ref={ref}>
                <animated.div style={styles}>
                <Image src="/johnvchuma/dar.jpg" fluid/>
                </animated.div>
               
                <Paragraph fontSize={18} className={`mt-3`} text={`I AM CURRENTLY RESIDING IN DAR ES SALAAM, TANZANIA, VERY BEAUTIFUL CITY LOCATED ON THE EAST COAST OF AFRICA.`}/>
                
                </div>
               
                </Col>
                <Col md={3}>
                </Col>
             </Row>
           <Space/>
           <Heading className={'text-start'} text={`WHO IS JOHN  CHUMA ?`}/>
           
           <Space/>
           <Row id='about'>
            <Col md={5}>
            <Paragraph text={`This is who i am `}/>
            
            </Col>
            <Col md={6} >
              <div ref={aboutSecRef} >
                <animated.div style={stylesFade}>
                <Heading lineHeight={1.2} fontWeight={600} size={35} text={`John Vedastus Chuma is a full-stack developer from Dar es Salaam, Tanzania. Specializing in the MERN stack, Flutter, Git, and AWS`}/>
                <Paragraph className={`mt-5`} color={textColor} text={`I graduated from DIT University with a Bachelor's degree in Electronics and Telecommunications Engineering in 2023. During my studies, I developed a passion for programming and web development. While still studying, I worked part-time at SmartClass Company Limited as a full-stack developer from December 2021 to November 2022, where I honed my skills and gained valuable experience in the field. Inspired by my love for UI/UX design, I launched my own website called www.uiuxrev.art, where I provide review services for designers. I am dedicated to delivering top-notch solutions that exceed my clients' expectations and push the boundaries of what's possible in the world of web development.`}/>
                </animated.div>
              
              </div>
           
            </Col>
            <Col md="1"></Col>
           </Row>
           <Space/>
           <div id='portifolio'>
           <Heading text={`MY PROJECTS`}/>
          <Space height={50}/>
           <Row className=''>
            {[
                {image:'my web.png',title:"React & Firebase",link:"https://johnvchuma.com",type:"WEBSITE"},
                {image:'fort ict.png',title:"HTML & CSS",link:"https://fortictsolutions.co.tz/installation.html",type:"WEBSITE"},
                {image:'alhusnain.png',title:"Laravel",link:"https://alhusnaintradersltd.com/",type:"WEBSITE"},
                {image:'silabu.png',title:"Futter & Node Js",link:"https://play.google.com/store/apps/details?id=com.silabu.silabuapp&hl=en&gl=US&pli=1",type:"APP"},
                {image:'review.png',title:"React & Firebase",link:"https://www.uiuxrev.art/",type:"WEBSITE"},

            ].map((item)=>
              <Col md="6 mb-4"><Image src={'/johnvchuma/'+item.image} fluid/> <Row className='mt-2'><Col className='text-start'>
                <Paragraph className={`p-0 m-0`} text={item.title}/>
              <Stack direction='horizontal'>
             <a href={item.link}  target='_blank' style={{textDecoration:"none",}}>
                <Paragraph className={`p-0 m-0`} text={item.link} /></a> 
              </Stack>
              
                </Col>
                <Col  className='text-end'>
                    <Paragraph className={`text-end`} text={`(${item.type})`}/>
                </Col></Row></Col>)}
           </Row>
           </div>
         
           <Space/>
           <div id="skills">
           <Paragraph text={'Technologies i have worked with'}/>
           {/* <Heading text={`MY SKILLS`}/> */}
           <div className='marquee mt-5'>
            
             <Heading color={`#000000`} className={'forward'} text={technologies.map((item,index)=>`${item.name}${index!=technologies.length-1?' - ':" "} `)} />
            
           
           </div>
           <div className='backwardmarquee'>
            
             <Heading  color={`#000000`} className={'backward'} text={technologies.map((item,index)=>`${item.name}${index!=technologies.length-1?' - ':" "} `)} />
            
           </div>
           </div>
        
           <Space/>
           <div id='experience'>
           <Heading color={"#00000070"} text={`EXPERIENCE`}/>
            <Space height={30}/>
            <Row >
            <Col md="4">
            <Image src='/johnvchuma/car.jpg' fluid />
             <Paragraph className={`mt-3`} text={`AL-HUSNAIN MOTORS LIMITED (2020-2021)`}/>
             <Paragraph color={textColor} text={"During my time at Al-Husanain Motors Limited, I spearheaded the development of the company's E-commerce website, which was built using Laravel and MySQL DBMS. The website serves as a platform for selling cars and continues to be utilized by the company, contributing significantly to its profitability. I am proud to have played a key role in the success of this project and the continued growth of the company"}/>
            </Col>
            <Col md="8">
            <Image src='/johnvchuma/team.jpeg' id='team' fluid />
            <Paragraph className={`mt-3`} text={`SILABU (FEB 2022 - NOV 2022)`}/>
            <Paragraph color={textColor} text={"During my tenure at SILABU from February 2022 to November 2022, I contributed as a front-end developer to the SILABU app. My primary responsibilities involved working on features such as tutor booking, archiving and pinning classes, and chat features using the Flutter framework and Node.js. My work also provided me with valuable experience in agile methodologies and continuous integration and deployment (CI/CD) practices."}/>
             <Space height={50}/>
             <Row>
                <Col md="8">
             <Heading size={35} lineHeight={1.1} text={`After gaining valuable experience from my previous roles, I launched my own website, www.uiuxrev.art developed using React & Firebase. This platform offers comprehensive review services to UI/UX designers to help them grow their skills and enhance their designs`}/>

                </Col>
             </Row>
            </Col>
            </Row>
           </div>
           
          
       
       <Space/>
        
        
        </Container>
        <Footer/>
        </div>
      
        
        </>
      
        

    )
}

export default HomePage
