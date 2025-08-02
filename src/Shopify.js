import React from 'react';

import img1 from "../src/images/pc.png";
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
import img18 from "../src/images/banner.jpg";
import img19 from "../src/images/m1.jpg"
import img20 from "../src/images/m2.webp"
import img21 from "../src/images/m3.jpg"
import img22 from "../src/images/m4.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faDollarSign, faPercent, faPhone } from '@fortawesome/free-solid-svg-icons';
// import ProductCard from './ProductCard';
import HomeCard from './HomeCard';

export default function Shopify() {
  return (
    <div>
      <div className='cont'>
        <div className='cont1'>
          <b>Starting At $999</b>
          <br /><br />
          <h1>The best notebook<br /> collection 2024</h1>
          <h3>Exclusive offer <span style={{ color: 'red' }}>-10%</span> off this week</h3>
          <br />
          <button><b>Shop Now</b></button>
        </div>
        <div className='cont2'>
          <img src={img1} alt="Notebook" />
        </div>
      </div>

      <div className='btns'>
        <div className='b1'>
          <FontAwesomeIcon icon={faTruck} /><h5>Free Delivery<br></br>
          Orders from all items</h5> 
        </div>
        <div className='b2'>
          <FontAwesomeIcon icon={faDollarSign} /><h5>Return & Refund<br></br>
          Money back guarantee</h5>
        </div>
        <div className='b3'>
          <FontAwesomeIcon icon={faPercent} /><h5>Member Discount<br></br>
          On order over $99</h5>         
        </div>
        <div className='b4'>
          <FontAwesomeIcon icon={faPhone} /><h5>Support 24/7<br></br>
          Contact us 24 hours a day</h5>
        </div>
      </div>
    
    
      <div className='container'>
       <h1>Trending Products</h1>
       <div  className='row'>
       

        <HomeCard  image={img2} title="beauty" description="Essence Mascara Lash Princess" price="$9.27"  btn="Add to Cart"/>
        <HomeCard  image={img3} title="beauty" description="Eyeshadow Palette with Mirror" price="$18.89"  btn="Add to Cart" />
       <HomeCard  image={img4} title="beauty" description="Powder Canister" price="$12.27"  btn="Add to Cart" />
        <HomeCard image={img5} title="beauty" description="Red Lipstick" price="$10.52"  btn="Add to Cart" />
        <HomeCard image={img6} title="beauty" description="Red Nail Polish" price="$8.77"  btn="Add to Cart" />
        <HomeCard image={img7} title="fragrances" description="Calvin Klein CK One" price="$49.99"  btn="Add to Cart" />
       <HomeCard  image={img8} title="fragrances" description="Chanel Coco Noir Eau De" price="$105.76"  btn="Add to Cart" />
        <HomeCard  image={img9} title="fragrances" description="Dior J'adore" price="$74.30"  btn="Add to Cart" />
        <HomeCard  image={img19} title="Mobile" description="Tecno Spark 9" price="$7,999"  btn="Add to Cart" />
        <HomeCard  image={img20} title="Mobile" description="Redmi Note 12 5G" price="$17,999"  btn="Add to Cart" />
        <HomeCard  image={img21} title="Mobile" description="Redmi K50i 5G" price="$26,999"  btn="Add to Cart" />
        <HomeCard  image={img22} title="Mobile" description="OnePlus 11 5G" price="$56,999"  btn="Add to Cart" />

     </div> 
    </div>
    
  
      
     <div className='main'>
       <div className='c1'>
         <img src={img18} height={500} width={800}></img>
       </div>
       <div className='c2'>
         <h2>Don't miss the offer<br></br>
         Grab it now</h2>
         <button><b>Shop Now</b></button>
        </div>
     </div>

   
      <br></br>
     <div  className='container'>
        <h1>New Arrivals</h1>
        <div className='row'>
         <HomeCard  image={img10} title="fragrances" description="Dolce Shine Eau de" price="$61.96"  btn="Add to Cart" />
         <HomeCard  image={img11} title="fragrances" description="Gucci Bloom Eau de" price="$72.87"  btn="Add to Cart" />
         <HomeCard  image={img12} title="furniture" description="Annibale Colombo Bed" price="$1899.99"  btn="Add to Cart" />
         <HomeCard  image={img13} title="furniture" description="Annibale Colombo Sofa" price="$2036.49"  btn="Add to Cart" />
         <HomeCard  image={img14} title="furniture" description="Bedside Table African Cherry" price="$271.25"  btn="Add to Cart" />
         <HomeCard  image={img15} title="furniture" description="Knoll Saarinen Executive Conference Chair" price="$423.84"  btn="Add to Cart" />
         <HomeCard  image={img16} title="furniture" description="Wooden Bathroom Sink With Mirror" price="$710.23"  btn="Add to Cart" />
         <HomeCard  image={img17} title="groceries" description="Apple" price="$1.95"  btn="Add to Cart" />
       </div>
      </div>
     
    </div>
 

  
  );
}
