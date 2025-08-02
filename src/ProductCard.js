import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcart } from './store/slice';

export default function ProductCard() {
const navigate = useNavigate()
 const [data,setdata]=useState([])
 const [filtereddata,setfilterteddata]=useState(data)
 const dispatch = useDispatch()

  useEffect(()=>{

    const fetchApi=async()=>{

      const {data}= await axios ("https://shivraj-chavan.github.io/api/electronics.json")

      setdata(data)
      setfilterteddata(data)

    }

fetchApi()

  },[])

  const filterData=(category)=>{
    if(category==="All"){
      setfilterteddata(data)
    }
    else{
      let newdata = data.filter((x)=>category===x.category)
      setfilterteddata(newdata)
    }
  }
 const openPage =(x)=>{
  navigate (`/productDetails/${x.category}/${x.id}`)
 }

 const senddata=(value)=>{
  dispatch(addcart(value))
 }

  return (
    <div className="container">
      <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => filterData("All")}>All</button>
      <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => filterData("mobile")}>MOBILE</button>
      <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => filterData("laptop")}>LAPTOP</button>
      <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => filterData("watch")}>SMARTWATCH</button>
      <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={() => filterData("airdopes")}>EARBUDS</button>
      <button className='btn btn-primary' onClick={() => filterData("tv")}>TV</button>


      <div className="row">
        {
          filtereddata?.map((value)=>{
            return(
              <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
              <div className="card m-3 product-card">
                <img src={value.thumbnail} onClick={()=>openPage(value)} className="card-img-top product-image" alt={value.description} />
                <div className="card-body">
                  <p className="card-text product-title">{value.title}</p>
                  <h5 className="card-title">{value.description[0].toString().substr(0,60)}</h5>
                  <div>
                    <span className="product-price">${value.price}</span>
                    <br></br>
                    <button classname="btn btn-outline primary" onClick={()=>{senddata(value)}}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}