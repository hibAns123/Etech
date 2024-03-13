import React, { useState } from 'react'
import Card from '../components/Card';
import axios from 'axios'

function Books() {
  const [search,setSearch]=useState("")
  const[bookData,setData]=useState([])
  const searchBook =(evt)=>{
    if(evt.key==='Enter'){
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDUAvHhIC2C59PUmUHj2jChE_c_4Bzjy44"+"&maxResults=40").then(res=>{setData(res.data.items)}).catch(err=>{console.log(err)})
    }
  }

  return (
  <>
      <div className='head' style={{width:'100%',height:'500px',display:'flex',alignItems:'center',position:'relative'}}>
        <div className="row1">
          <h1 style={{color:'white'}}>A Room Without Book Is Like <br /> A Body Without A Soul</h1>
        </div>
        <div className="row2" style={{position:'absolute', top:'50px',right:'150px',textAlign:'center'}}>
          <h2 style={{fontSize:'3rem',marginTop:'20px',marginBottom:"15px",fontWeight:'bolder'}}>Find Your <span style={{color:'orange'}}>Book</span></h2>
          <div className="search" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           
            <input value={search} onChange={e=>setSearch(e.target.value) } type="text" placeholder='Enter book name' onKeyDown={searchBook}/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
  
          </div>
          <img src="8.png" alt="" />
        </div>
      </div>
      <div className="container" style={{width:'65%',display:'grid',gridTemplateColumns:'repeat(4,minmax(200px,0.5fr))',margin:'0 auto',marginTop:'25px'}}>
        {
        <Card book={bookData}/>

        }
      </div>
  </>
  )
}

export default Books