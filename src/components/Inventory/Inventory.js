/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import fakeData from './../../fakeData/index';

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('https://sleepy-atoll-17278.herokuapp.com/addProduct', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fakeData)
            } )
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <form>
                 <div className="form-group">
                     <label htmlFor="Product Name">Product Name</label>
                     <input type="text" className="form-control"/>
                 </div>

                <button class="btn btn-info" onClick={handleAddProduct}>Add product</button>
                </form>
                </div>
            </div>
            
        </div>
    );
};

export default Inventory;