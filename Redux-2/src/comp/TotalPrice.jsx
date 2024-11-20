import React from 'react'
import { useSelector } from 'react-redux';


export default function TotalPrice() {
  const allProducts = useSelector((state) => state.products);

  const showTotalPrice = () => {
    return allProducts.reduce((acc, curr) => { return acc + parseInt(curr.price) }, 0)
  }
  
  return (
    <div style={{border: '1px solid red' , padding: '20px'}}>
      <h2>Total Price</h2>
      {showTotalPrice()}
    </div>
  )
}
