import React from 'react'
import './Product.css'

function Product({image, name, price}) {
    return (
        <div className="product">
            <div className="product__card">
                
                <div className="product__image">
                <img src={image}/>
                </div>
                <div className="product__details">
                <h2>{name} </h2>
                <h5>₹{price}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Product
