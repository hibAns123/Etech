import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getAllFilesAPI} from '../services/allAPI'
import { useState } from 'react'
import File from './File'

function View1({uploadFileResponse}) {
    const [allFiles, setAllFiles] = useState([])
    const [deleteFileResponse, setDeleteFileResponse] = useState('')
    const getAllFiles = async () => {
        const result = await getAllFilesAPI()
        if (result?.status == 200) {
          setAllFiles(result?.data);
    
        }
      }
       // when reload page it 
  useEffect(() => {
    getAllFiles()
  }, [uploadFileResponse, deleteFileResponse])
  return (
    <>
    <Row >
      {allFiles?.length > 0 ? allFiles?.map((file, index) => (
        <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
          <File displayData={file} setDeleteFileResponse={setDeleteFileResponse} />
        </Col>
      ))
        :
        <div style={{textAlign:'center',color:'orange',fontWeight:'bolder',fontSize:'20px',marginBottom:'100px'}}>No files are uploaded yet!!</div>
      }

    </Row>
  </>  )
}

export default View1