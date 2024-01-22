import React, { useEffect, useState } from 'react'
// import Maincontext from '../COntext/context'
import { useParams } from 'react-router'
import axios from 'axios'

function Detail() {
  const[detail,setDetail]=useState([])
  const{id}=useParams()
 useEffect(()=>{
  axios.get(`http://localhost:7373/pulse/${id}`).then(res=>{
    setDetail(res.data)
  })
 })
  return (
    <div>
     <div><p> <b>Name:</b>{detail.name} <b>     Price:</b> {detail.price}</p></div>
      
    </div>
  )
}

export default Detail
