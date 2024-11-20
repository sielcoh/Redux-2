import React from 'react'
import { useDispatch } from 'react-redux';

export default function Product({ product }) {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch({ type: 'DELETE', payload: product.name});
    };
    return (
        <div style={{ border: '1px solid green', padding: '20px', textAlign: 'center', marginTop: '8px'  }}>
            <h2>Product data</h2>
            <span>Name: {product.name}</span>
            <br />
            <span>Price: {product.price}</span>
            <br />
            <br />
            <button onClick={remove}>remove</button>

        </div>
    )
}
