import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'
function StudentDetails() {

    const {stdid} = useParams()

    const StdDetails = Data.find((d)=> d.id== stdid )
  return (
    <>
    <h1> Student Details </h1>
    
    <h1> ID =  {StdDetails.id} </h1>
    <h1> Name =  {StdDetails.names} </h1>
    <h1> Address =  {StdDetails.Address} </h1>
    <h1> Mobile No =  {StdDetails.Mobile_no} </h1>

    </>
  )
}

export default StudentDetails