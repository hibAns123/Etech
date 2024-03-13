import React from 'react'

import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadFileAPI } from '../services/allAPI';


function Add1({ setUploadFileResponse }) {
    const [uploadFile, setUploadFile] = useState({heading:'',description:'',pdf:''})
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false);
        // to be 
   setUploadFile({...uploadFile,heading:"",description:"",pdf:""})
    }
    const handleShow = () => setShow(true);
   

    // Function to handle file upload
    const handleUpload = async () => {
        // store video in local host 3000/videos
        const { heading, description, pdf } = uploadFile
        // Perform upload logic here, e.g., send file to server
        if (heading && description && pdf) {
           
            const result = await uploadFileAPI(uploadFile)
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                alert(`File '${result.data.heading}' uploaded successfully!!!`)
                setUploadFileResponse(result.data)
                handleClose()
            } else {
                alert("API call failed..please try after some time!!")
            }
        } else {
            alert("please fill the form completely!!!")
        }
    };
    return (

        <>
            <div style={{marginBottom:'100px'}}>
                <h1 style={{marginTop:'70px',fontWeight:'bolder',fontSize:'50px',textAlign:'center'}}>Store and <span style={{color:'orange'}}>Learn!!</span></h1>
                <p style={{marginTop:'40px',fontWeight:'bolder',fontSize:'20px',textAlign:'center'}}>Transform the way you learn by storing your educational materials, for seamless organization and retrieval.</p>
        
                   <Button style={{float:'right',marginRight:'200px'}} variant="primary" onClick={handleShow}>
            Add New Notes
            </Button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please  Fill The Following Details!!!</p>
                    <div className='border rounded border-secondary p-3'>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Heading"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Heading" onChange={e => setUploadFile({ ...uploadFile, heading: e.target.value })} value={uploadFile.heading} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Description"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Description" onChange={e => setUploadFile({ ...uploadFile, description: e.target.value })} value={uploadFile.description} />
                        </FloatingLabel>




                        <FloatingLabel
                            controlId="floatingInputLink"
                            label="Upload PDF"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder=".pdf" onChange={e => setUploadFile({ ...uploadFile, pdf: e.target.value })} value={uploadFile.pdf} />
                        </FloatingLabel>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpload} variant="info">Upload</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add1