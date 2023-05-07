import React, { useEffect, useRef } from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import Heading from '../widgets/heading'
import Avatar from '../widgets/avatar'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space'
import { technologies } from '../utils/technologies'
import { textColor } from '../utils/site_colors'

const HomePage = () => { 

    return (
        <>
        <Container id='' className=''>
            <div  className='text-center mt-5'>
            {/* <Stack className='mt-5 d-flex justify-content-center ' direction='horizontal'> */}
            <Heading className={'p-0 m-0 '} text={`HELLO, I AM`}/>
            {/* </Stack> */}
             <Row className='align-items-center'>
                <Col md="4" className='text-start d-none d-md-block' >
                    <Paragraph indent={30} text={`MERN stack developer and Flutter enthusiast experienced in Git, AWS services, and agile methodologies. `}/>
                </Col>
                <Col md="8">
                <Heading text={`SOFTWARE`}/>
                </Col>
             </Row>     
            <Heading text={`DEVELOPER`}/>
            <Col md="4" className='text-start d-block d-md-none' >
                    <Paragraph indent={30} text={`MERN stack developer and Flutter enthusiast experienced in Git, AWS services, and agile methodologies. `}/>
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
                <Image src="dar.jpg" fluid/>
                <Paragraph fontSize={18} className={`mt-3`} text={`I AM CURRENTLY RESIDING IN DAR ES SALAAM, TANZANIA, VERY BEAUTIFUL CITY LOCATED ON THE EAST COAST OF AFRICA.`}/>
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
            <Col md={6}>
            <Heading lineHeight={1.2} fontWeight={600} size={35} text={`I'm John Vedastus Chuma, a full-stack developer from Dar es Salaam, Tanzania. Specializing in the MERN stack, Flutter, Git, and AWS`}/>
            <Paragraph className={`mt-5`} color={textColor} text={`I graduated from DIT University with a Bachelor's degree in Electronics and Telecommunications Engineering in 2023. During my studies, I developed a passion for programming and web development. While still studying, I worked part-time at SmartClass Company Limited as a full-stack developer from December 2021 to November 2022, where I honed my skills and gained valuable experience in the field. Inspired by my love for UI/UX design, I launched my own website called www.uiuxrev.art, where I provide review services for designers. I am dedicated to delivering top-notch solutions that exceed my clients' expectations and push the boundaries of what's possible in the world of web development.`}/>
            </Col>
            <Col md="1"></Col>
           </Row>
           <Space/>
           <div id='portifolio'>
           <Heading text={`MY PROJECTS`}/>
          <Space height={50}/>
           <Row className=''>
            {[
                {image:'my web.png',title:"React & Firebase",link:"www.johnvchuma.com",type:"WEBSITE"},
                {image:'fort ict.png',title:"HTML & CSS",link:"www.fortictsolutions.co.tz",type:"WEBSITE"},
                {image:'alhusnain.png',title:"Laravel",link:"www.alhusnaintraders.com",type:"WEBSITE"},
                {image:'silabu.png',title:"Futter & Node Js",link:"www.silabu.com",type:"APP"},
              

            ].map((item)=>
              <Col md="6 mb-4"><Image src={item.image} fluid/> <Row className='mt-2'><Col className='text-start'>
                <Paragraph className={`p-0 m-0`} text={item.title}/>
               <a href={item.link} style={{textDecoration:"none"}}>
                <Paragraph className={`p-0 m-0`} text={item.link} /></a> 
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
            
             <Heading color={`#00000070`} className={'forward'} text={technologies.map((item,index)=>`${item.name}${index!=technologies.length-1?' - ':" "} `)} />
            
           
           </div>
           <div className='backwardmarquee'>
            
             <Heading  color={`#00000070`} className={'backward'} text={technologies.map((item,index)=>`${item.name}${index!=technologies.length-1?' - ':" "} `)} />
            
           </div>
           </div>
        
           <Space/>
           <div id='experience'>
           <Heading  text={`EXPERIENCE`}/>
            <Space height={30}/>
            <Row >
            <Col md="4">
            <Image src='car.jpg' fluid />
             <Paragraph className={`mt-3`} text={`AL-HUSNAIN MOTORS LIMITED (2020-2021)`}/>
             <Paragraph color={textColor} text={"During my time at Al-Husanain Motors Limited, I spearheaded the development of the company's E-commerce website, which was built using Laravel and MySQL DBMS. The website serves as a platform for selling cars and continues to be utilized by the company, contributing significantly to its profitability. I am proud to have played a key role in the success of this project and the continued growth of the company"}/>
            </Col>
            <Col md="8">
            <Image src='team.jpeg' fluid />
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
        
        </>
      
        

    )
}

export default HomePage
