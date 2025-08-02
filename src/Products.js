import React from 'react'
import ProductCard from './ProductCard';
import img2 from "../src/images/i1.png";
import img3 from "../src/images/i2.png";
import img4 from "../src/images/i3.png";
import img5 from "../src/images/i4.png";
import img6 from "../src/images/i5.png";
import img7 from "../src/images/i6.png";
import img8 from "../src/images/i7.png";
import img9 from "../src/images/i8.png";
import img10 from "../src/images/i9.png";
import img11 from "../src/images/i10.png";
import img12 from "../src/images/i11.png";
import img13 from "../src/images/i12.png";
import img14 from "../src/images/i13.png";
import img15 from "../src/images/i14.png";
import img16 from "../src/images/i15.png";
import img17 from "../src/images/i16.png";


export default function Products() {
  return (
    <div>
     <div className='container'>
       {/* <h2>Products</h2>
       <select>
         <option>Default</option>
         <option>Price(Low to High)</option>
         <option>Price(High to Low)</option>
       </select> */}

       <div  className='row m-5'>
       <ProductCard btn="Add to Cart"/> 
       </div>
      </div>
    </div>
  )
}
