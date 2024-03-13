import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <nav className="nav d-flex allign-items-center justify-content-evenly container" style={{fontSize:"20px", marginTop:'20px',marginBottom:'20px'}}>
     
       
        
        <div className='d-flex allign-items-center justify-content-between '>
          
              <Nav.Link  style={{marginRight:"30px"}} href="/">Home</Nav.Link>
              <Nav.Link style={{marginRight:"30px"}} href="/Books">Books</Nav.Link>
              <Nav.Link style={{marginRight:"30px"}} href="/Diary">Diary</Nav.Link>
        </div>
             <h1 className='h1' style={{marginRight:"200px"}}  href="#home">E<span style={{color:'orange'}}>Tech</span></h1>
            <Button style={{float:'right'}} href='#submit' >SIGNIN</Button>

       
          
      
    </nav>
  )
}

export default Header