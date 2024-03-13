import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link,useNavigate } from 'react-router-dom';


function Home() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        navigate('/Diary');
      }
  
      setValidated(true);
    };
  return (
   <>
 <section className='front'>
       <div className="row" >
        <div className="col-4">
          <img src="1.png" alt="" />
        </div>
        <div className="col-4" style={{marginTop:"100px"}}>
            <h2 style={{fontWeight:'bolder',letterSpacing:'1px',fontSize:"50px"}}>LIVE,<span style={{color:'#fd7e14'}}>LEARN</span>,GROW</h2>
            <h1>Welcome to <span style={{color:'#fd7e14',fontSize:'40px',fontWeight:'bolder'}}>ETech</span> </h1>
    <h4 style={{color:"#fd7e14"}}>
                    Your Personal Library for Learning Success!
        
    </h4>    </div>
        <div className="col-4">
            <img style={{width:'500px'}} src="2.png" alt="" />
        </div>
       </div>
 </section>

    <h2 style={{textAlign:'center',marginTop:"50px",fontFamily:'Madimi One',fontSize:'40px'}}>Unlock the Power of Knowledge!</h2>
 
 <section className='about'>
<div className='row container ' style={{marginLeft:'100px'}} >
       <div className='col-6'>
          <img style={{width:"600px"}} src="7.png" alt="" />
       </div>
       <div className="col-6" style={{marginTop:'200px'}}>
       <h2 style={{fontWeight:'bolder'}}>: <span  style={{color:'orange'}}>Discover, Share, and Learn</span> !</h2>
            <h5>Embark on a journey of academic enrichment with Etech, your go-to destination for accessing a wealth of educational resources. Whether you're a student seeking study materials or an educator eager to share knowledge, our platform is designed to foster collaboration and lifelong learning. Dive into a diverse collection of study materials, from insightful lesson plans to engaging worksheets, curated by fellow learners and educators alike. Join our vibrant community today and elevate your learning experience to new heights!</h5>
<Link to={'/Books'}>
              <Button style={{color:'orange'}}>Explore The Books</Button>
  
</Link>        
       </div>
</div>    
 </section>
 <section className='personal'>
    <div className="row" style={{marginTop:'50px',marginBottom:'100px'}}>
    <div className="col-6" style={{marginLeft:'100px',width:'500px'}}>
            <h2>Welcome to Your <br /><span style={{color:'#fd7e14', fontWeight:'bolder'}}>Personal Study Sanctuary</span></h2>
            <h5 style={{lineSpacing:'2px'}}>Step into your own personal library within ETech, where your curated collection of study materials awaits. Here, you can organize your resources easily access everything you nee Explore, organize, and thrive in your personal study sanctuary.</h5>
        </div>
        <div id='submit' className="col container" style={{marginLeft:'200px'}} >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2> Start Your <span style={{color:"#fd7e14",fontWeight:'bolder'}}>Journey!!</span></h2>
      <Row className="mb-3">
      
       
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color:"#fd7e14",fontWeight:'bolder'}}>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={{color:"#fd7e14",fontWeight:'bolder'}}>EmailId</Form.Label>
          <Form.Control
            required
            type="email" 
            placeholder="abc@gmail.com"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button style={{backgroundColor:'#fd7e14',color:'white'}} type="submit">Submit form</Button>
    </Form>
        </div>
       
    </div>
 </section>
   </>
  )
}

export default Home