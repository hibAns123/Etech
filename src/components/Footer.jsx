import React from 'react'

function Footer() {
  return (
    <>
      <div className="row" style={{ backgroundColor: '#7f8a99' }}>
        <div className="col-4">             <h1 className='h1' style={{ marginLeft: "100px", marginTop: '70px', marginBottom: "70px", fontSize: '50px' }} href="#home">E<span style={{ color: 'orange' }}>Tech</span></h1>
        </div>
        <div className="col-4">
          <h2 style={{ color: 'orange', fontWeight: 'bolder', marginTop: '50px', fontSize: '25px', letterSpacing: "1px", marginLeft: '50px', marginBottom: '-10px' }}>Pages</h2>
          <br />
          <div className='d-flex'>
            <h6 style={{ letterSpacing: "1px", marginRight: '20px', color: 'white' }}>Home</h6>

            <h6 style={{ letterSpacing: "1px", color: 'white', marginRight: '20px' }}>Diary</h6>
            <h6 style={{ letterSpacing: "1px", color: 'white' }}>Books</h6>

          </div>        </div>
        <div className="col-4">
          <h2 style={{ color: 'orange', fontWeight: 'bolder', marginTop: '50px', fontSize: '25px', letterSpacing: "1px", marginLeft: '50px' }}>Connnections</h2>
          <div className="row">
            <div className="col" style={{ color: 'orange', marginRight: '-80px' }}><i className="fa-brands fa-facebook-f"></i></div>
            <div className="col" style={{ color: 'orange', marginRight: '-80px' }}><i className="fa-brands fa-instagram" aria-hidden="true"></i></div>
            <div className="col" style={{ color: 'orange', marginRight: '-80px' }}><i className="fa-brands fa-twitter" aria-hidden="true"></i></div>
            <div className="col" style={{ color: 'orange', marginRight: '-80px' }}><i className="fa-brands fa-youtube" aria-hidden="true"></i></div>
            <div className="col" style={{ color: 'orange' }}><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></div>
          </div>
        </div>
        
      <p style={{color:'white',textAlign:'center'}}><a style={{textDecoration:'none',color:'orange'}} href="">Etech | Support | Privacy Policy</a></p>
      <p style={{color:'white',textAlign:'center'}}>Copyright 2024 Etech.in.All rights Reserved</p>
      </div>
    
    </>
  )
}

export default Footer