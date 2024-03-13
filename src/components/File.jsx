import React, { useState } from 'react'
import { Card} from 'react-bootstrap'
import { removeFilesAPI } from '../services/allAPI';

function File({displayData,setDeleteFileResponse}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
const handleShow=async()=>{
    setShow(true);
    const {heading, description, pdf} = displayData
}
// remove File
const deleteFile = async (fId) => {
    // api call
    const result = await removeFilesAPI(fId)
    setDeleteFileResponse(result.data)
    
  }
    return (
        <>
        <Card style={{ height: '250px' }} className='shadow'>
          
          <Card.Body>
            <Card.Title className='d-flex justify-content-between'>
              <h2 style={{fontSize:'40px',paddingLeft:"50px", fontWeight:'bolder',color:'#b4590e'}} onClick={handleShow}>{displayData?.heading}</h2>
              
              
{/* <button onClick={openPDF}>open</button> */}
              <button onClick={() => deleteFile(displayData?.id)} className='btn'>
              <i className="fa-solid fa-trash text-warning"></i></button>
            </Card.Title>
            <p style={{fontSize:'20px'}}>{displayData?.description}</p>
            <a style={{fontSize:'20px',color:'orange'}} target='_blank' href={displayData?.pdf}>{displayData?.pdf}</a>
            
  
          </Card.Body>
        </Card>
        
      </>
  )
}

export default File