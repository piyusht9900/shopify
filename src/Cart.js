import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTocart } from './store/slice'

export default function Cart() {
  const cardData = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const senddata = (value) => {
    dispatch(removeTocart(value))
  }

  return (
    <div>
      <h3>Cart Items: {cardData.length}</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          {cardData.map((value,index) => {
            return (
              <tr key={value.id}> {/* Make sure 'id' is unique */}
                <td>
                  <img
                    src={value.thumbnail}
                    alt={value.title}
                    style={{ width: '50px', height: 'auto' }}
                  />
                </td>
                <td>{value.category}</td>
                <td>{value.title}</td>
                <td>${value.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => senddata(value)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          })

        }                
                      
                                  </tbody>
                                  
                                          </table>
    </div>
  )
}
