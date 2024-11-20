import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function NewProduct() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const product = {
        name,
        price
    }
    const addProduct = () => {
        dispatch({ type: 'ADD', payload: product });
    };

    // const updateUser = () => {
    //     dispatch({ type: 'UPDATE', payload: user });
    // };

    // const deleteUser = () => {
    //     dispatch({ type: 'DELETE', payload: user });
    // };


    return (
        <div style={{border: '1px solid red' , padding: '20px',textAlign: 'center'}}>
            <h2>Order New Product</h2> 
            <h2>Name:</h2>
            <input type="text" onChange={e => setName(e.target.value)} />
            <br />
            <h2>Price:</h2>
            <input type="number" onChange={e => setPrice(e.target.value)} />
            <br />            
            <br />
            <button style={{margin:'auto, 0'}} onClick={addProduct}>Add</button>
        </div>
    )
}
