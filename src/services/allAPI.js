import { SERVER_URL } from "../server_url";
import { commonAPI } from "./commonAPI";


// upload file
export const uploadFileAPI = async(file) => {
    // send response
    return await commonAPI('POST', `${SERVER_URL}/allfiles`, file)
}
// get file API called
export const getAllFilesAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/allfiles`, "")

}
// delete video 
export const removeFilesAPI = async(fileId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allFiles/${fileId}`,{})

}