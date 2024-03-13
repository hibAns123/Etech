import React, { useState } from 'react'

import Add1 from '../components/Add1'
import View1 from '../components/View1'

function Diary() {
    const [uploadFileResponse,setUploadFileResponse]=useState("")

  return (

    <>
    <div className="row dry">
        <div className="col-6">
            <h1  style={{marginTop:'150px',marginLeft:"100px"}}><span style={{color:'white',fontSize:'50px'}}>Welcome to Your <br /> </span>Digital Learning<span style={{color:'#b4590e',fontFamily:"Madimi One"}}> Haven</span></h1>

        </div>
        <div className="col-6">
            <img style={{ marginLeft:'50px',width:'700px',height:"550px"}} src="9.png" alt="" />
        </div>
    </div>

    <Add1 setUploadFileResponse={setUploadFileResponse}/>
    <View1 uploadFileResponse={uploadFileResponse} />

    </>
  )
}

export default Diary