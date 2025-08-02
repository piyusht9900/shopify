import React from 'react';
import img1 from '../src/images/i1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar, faHeart } from '@fortawesome/free-solid-svg-icons'; 

export default function Beauty1() {
  return (
    <div>
      <div className='contain' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='c1'>
          <img src={img1} alt="Essence Mascara Lash Princess" width={400} />
        </div>
        <div className='c2' style={{ width: '500px' }}>
          <p style={{ fontSize: '20px' }}><b>Essence Mascara Lash Princess</b></p>
          <p style={{ color: 'blue' }}>$9.27</p>
          <p>
            <b>Brand</b> - Essence<br />
            <b>Category</b> - beauty<br />
            <b>Stock</b> - 5
          </p>
          <p style={{ textAlign: 'justify' }}>
            <b>About the product</b><br />
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.
          </p>
          <button style={{ background: 'rgb(255, 0, 140)', border: 'none', borderRadius: '5px', width: '150px', height: '40px', color: 'white' }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '15px', margin: '0px' }} /> Add To Cart
          </button>
          <button style={{ background: '#4285F4', border: 'none', borderRadius: '5px', width: '150px', height: '40px', color: 'white' }}>
            <FontAwesomeIcon icon={faHandHoldingDollar} style={{ fontSize: '15px', margin: '0px' }} /> Buy Now
          </button>
          <button style={{ background: '#ffcc00', border: 'none', borderRadius: '5px', width: '150px', height: '40px', color: 'white'}}>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '15px', margin: '0px' }} /> Add To Wishlist
          </button>
        </div>
      </div>
      <br></br>
    </div>
  );
}
