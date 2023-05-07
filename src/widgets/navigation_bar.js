import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Paragraph from './paragraph'

const NavigationBar = () => {
    const items = [
    {name:"Home",path:"#top"},
    {name:"Education background",path:"#about"},
    {name:"Experience",path:"#experience"},
    {name:"Potifolio",path:"#portifolio"},
    {name:"Skills",path:"#skills"}
]
    return (
        <>
        <Navbar id='top' className='py-4 mt-1 ' expand="md">
        <Container>

            <Navbar.Brand  style={{fontWeight:700,fontSize:30}}>ME</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}
            <a  style={{textDecoration:'none',fontWeight:700}} className='d-block d-md-none'>
            <Paragraph text={`Menu` }/>
            </a>
            <Navbar.Collapse id='navbar-nav' >
             <Nav className='ms-auto me-auto'>
             {items.map((item,index)=><Nav.Link  href={item.path} className={`mx-3 text-dark`} style={{fontSize:17,fontWeight:600}} >{item.name}</Nav.Link>)}
             </Nav>
             <Nav.Link className='' href='#footer' style={{fontSize:17,fontWeight:600}} >Work with me</Nav.Link>
            </Navbar.Collapse>
        </Container>

        </Navbar>
        </>
      
    )
}

export default NavigationBar
