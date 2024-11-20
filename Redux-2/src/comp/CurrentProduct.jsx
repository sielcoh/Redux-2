import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';


export default function CurrentProduct() {
  const allProducts = useSelector((state) => state.products);
  return (
    <div style={{border: '1px solid red' , padding: '20px'}}>
      <h2>CurrentProduct</h2>
      {allProducts.map((product, index) => (
        <div key={index}>
          <Product product={product} />
        </div>

      )
      )}


    </div>
  )
}
