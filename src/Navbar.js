import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMoon } from '@fortawesome/free-solid-svg-icons';
import  {useSelector} from 'react-redux'

export default function Navbar() {
  const cardData= useSelector((state)=>state.cart)

  return (
    <div>
      <div className='navbar'>
        <ul>
          <li><Link to="/"><h1 style={{fontFamily:'Commercial Script BT Regular' ,color:'white'}}>Shopify</h1></Link></li>
          <li>
            <form className='search-container'>
            <input type="text" placeholder="Search for a product..." class="search-input"></input>
            <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" fill="white"/>
           </svg>
  </button>
            </form>
          </li>
          <li style={{fontSize:'25px'}}><Link to="/Products"><b>Products</b></Link></li>
          <li style={{fontSize:'25px'}}><Link to="/Categories"><b>Categories</b></Link></li>
          <li style={{fontSize:'25px'}}>
            <Link to="/Login"><b>Login</b></Link>
            <FontAwesomeIcon icon={faUser} style={{ color: 'white' }}/>
          </li>
          <li>
            <Link to="/Cart">
              <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'25px', margin:'10px'}}/>
              <span className="cart-count"><b>{cardData.length}</b></span>
            </Link>
          </li>
          <li>
            <Link to="/Moon">
            <FontAwesomeIcon icon={faMoon} style={{fontSize:'25px',margin:'10px'}}/>
            

            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
