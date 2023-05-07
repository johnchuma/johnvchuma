import React from 'react'
import { Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Space from './space'
import Heading from './heading'
import Avatar from './avatar'
import Paragraph from './paragraph'
import { FaAccusoft, FaArrowRight, FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const items = [
    {name:"Home",path:"#top"},
    {name:"Education background",path:"#about"},
    {name:"Experience",path:"#experience"},
    {name:"Potifolio",path:"#portifolio"},
    {name:"Skills",path:"#skills"}
    ]

    return (
        <div style={{backgroundColor:"#1B1B1C"}}>
         <Container >
            <Space />
            <Stack direction='horizontal' className='d-flex justify-content-between'>
            <Avatar size={50} src={`me.jpg`}/>
            <Heading color={`white`} text={'ME'}/>
            </Stack>
          <Space/>
          <div className='w-100 ' style={{height:1,backgroundColor:"#ffffff30"}}></div>
          <Space height={50}/>
          <Row id='footer'>
            <Col md="6">
             <Paragraph color={`white`} text={`Quick links`}/>
          <Space height={30}/>

             {items.map((item)=><a href={item.path} style={{textDecoration:'none'}}><Paragraph text={item.name} color={`#ffffff60`}/></a>)}
            </Col>
            <Col md="6">
            <Paragraph color={`white`} text={`Holla at me! Let's connect and bring your ideas to life. Drop me a message and let's get started.`}/>
           <Space height={40}/>
           <Stack direction='horizontal'>
            <Form.Control as={`textarea`} rows={1} id='inputID' placeholder='Write message to me'className='rounded-0 py-4 px-0  shadow-none' style={{backgroundColor:'transparent', fontSize:30,color:"white",overflowY:'hidden', borderBottomColor:'#ffffff40',borderTop:0,borderLeft:0,borderRight:0}}></Form.Control> 
            <FaArrowRight color='white' size={30}/>
           </Stack>
           <Space height={60}/>

            <Paragraph fontWeight={400} fontSize={13} color={`#ffffff50`} text={`Your details are safe with me! I take your privacy seriously and will never share your information with anyone else. Plus, your message will be sent anonymously, so you can feel secure in sharing your thoughts with me.`}/>
            </Col>
          </Row>

          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <Space/>
          <div className='d-none d-md-block'>
          <Row >
                <Col md={4}>
                <Paragraph  color={`white`} text={`Copyright ©️ 2023 | John Chuma | Tanzania `}/>
                </Col>
                <Col  md={4}>
                <Stack className='d-flex justify-content-center' direction='horizontal'>
                <FaInstagram className='mx-2'  size={20} style={{color:"white"}}/>
                <FaTwitter  className='mx-2' size={20} style={{color:"white"}}/>
                <FaFacebook className='mx-2'  size={20} style={{color:"white"}}/>
                <FaLinkedin className='mx-2'  size={20} style={{color:"white"}}/>
                </Stack>
                </Col>
                <Col md={4}>
                <a className='' style={{textDecoration:'none'}}  href='#top'>
                <Stack direction='horizontal' className='d-flex justify-content-end'>
                <Paragraph className={`p-0 m-0`}  color={`#ffffff70`} text={`Back to top`}/><FaArrowUp className='ms-2' style={{color:"white"}}/>
                </Stack>
                </a>
                </Col>
            </Row>
          </div>
           
           
      <Space height={50}/>
          
         </Container>
        </div>
    )
}

export default Footer
