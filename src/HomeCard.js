// import React from 'react'
// import image from "../i1.png"
import React, { useState } from 'react'



export default function ProductCard(props) {
  
  const [COUNTER,SETCOUNTER]= useState(1)
  const [DPRICE,SETPRICE]= useState()
  const COUNTERS=()=>{
    SETCOUNTER(COUNTER+1)
  }
    const COUNTERS1=()=>{
        if(COUNTER <= 0){
            SETCOUNTER(0)
        }
        else{
            SETCOUNTER(COUNTER-1)  
        }
    }

  const price=()=>{
    SETPRICE(DPRICE*COUNTER)
}


  return (
   <div className="card  m-3 "  style={{width: '18rem'}}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="ctitle">{props.title}</h5>
    <p className="ctext">{props.description}</p>
    <p className="price">{props.price}</p>
    <h5>Total Amt : {DPRICE}</h5>
    <h6>Quantity : {COUNTER}</h6>
    <button  onClick={COUNTERS} style={{background:'rgb(255, 0, 140)',border:'none',borderRadius:'5px'}}>+</button>&nbsp;<a href="#" className="btn btn-primary" onClick={price}>{props.btn}</a>&nbsp;<button  onClick={COUNTERS1} style={{background:'rgb(255, 0, 140)',border:'none',borderRadius:'5px'}}>-</button>
    
 
    {/* <button  onClick={COUNTERS} >+</button> */}
    {/* <button  onClick={COUNTERS1} >-</button>
     */}
  </div>
</div>

  )

}

// export default function ProductCard({img1,title,description,price}) {
//     return (
//      <div className="card  m-3 "  style={{width: '18rem'}}>
//     <img src={img1} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">{title}</h5>
//       <p className="card-text">description : {description}</p>
//       <a href="#" className="btn btn-primary">$ {price}</a>
//     </div>
//   </div>
  
  //   )
  
  // }