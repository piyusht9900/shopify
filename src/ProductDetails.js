import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

 const {category , id}=  useParams()

 const [api,setapi] = useState([])


 const  fetchapi=async()=>{

    const response = await fetch("https://shivraj-chavan.github.io/api/electronics/${category}/${id}.json")

    const data = await response.json()

    setapi(data)

 }

 useEffect(()=>{
    fetchapi()
 },[])


  return (
    <div>
        <div className='details'>
        <div className='detail1'>
            <h2 style={{color:'red'}}>Product details</h2>

            <h3>Title  : {api.title}</h3>
            <img src={api.thumbnail} />
            </div>
    
        <div className='detail2' style={{textAlign:'justify', margin:'150px 50px'}}>
        
         <h3>Description:</h3>
         <br></br> 
         <h5>{api.description}</h5>
         <h5>Price:<span style={{color:'red'}}>${api.price}</span></h5>
         
        
        </div>
        </div>

    </div>
  )
}